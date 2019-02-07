import { Input, AfterViewInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { isEqual as _isEqual, cloneDeep as _cloneDeep, isEmpty as _isEmpty, omit as _omit, set as _set } from 'lodash';
import { Subject, Observable, Subscription } from 'rxjs';
import { pairwise, distinctUntilChanged, map, startWith, scan, delay } from 'rxjs/operators';
import { SubFormTypeConfig } from './controlled-sub-form.types';

interface FormState {
  value: any;
  pristine: boolean;
  valid: boolean;
}

interface ControlledSubFormState {
  control: FormState;
  subForm: FormState;
  reset: boolean;
}

const ACTION_CTRL_VALUE_INIT = 'ACTION_CTRL_VALUE_INIT';
const ACTION_CTRL_VALUE_CHANGE = 'ACTION_CTRL_VALUE_CHANGE';
const ACTION_SUB_FORM_VALUE_CHANGE = 'ACTION_SUB_FORM_VALUE_CHANGE';
const ACTION_SUB_FORM_STATUS_CHANGE = 'ACTION_SUB_FORM_STATUS_CHANGE';

export abstract class ControlledSubForm<ControlType, SubFormType> implements AfterViewInit, OnChanges, OnDestroy {
  @Input() disabled = false;
  @Input() control: FormControl;

  public subForm: FormGroup;
  protected formBuilder: FormBuilder;
  private state$: Observable<ControlledSubFormState>;
  private action$ = new Subject<any>();
  private ctrlValueChange$: Subscription;
  private stateSubscription$: Subscription;
  private subFormValueChangeSubscription$: Subscription;
  private subFormStatusChangeSubscription$: Subscription;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.subForm = this.formBuilder.group(this.getSubFormConfig(), this.getSubFormOptions());
    const initialState: ControlledSubFormState = {
      control: {
        value: null,
        pristine: true,
        valid: true
      },
      subForm: {
        value: this.subForm.value,
        pristine: true,
        valid: this.subForm.valid
      },
      reset: false
    };

    this.state$ = this.action$
      .pipe(startWith(initialState))
      .pipe(scan(this.reducer.bind(this)));

    this.stateSubscription$ = this.state$
      .pipe(distinctUntilChanged((a, b: ControlledSubFormState) => (b.reset ? false : _isEqual(a, b))))
      .pipe(pairwise())
      .subscribe(([prevState, nextState]) => {
        if (! _isEqual(prevState.subForm, nextState.subForm)) {
          this.renderSubFormStateChanges(nextState);
        }
        if (! _isEqual(prevState.control, nextState.control)) {
          this.renderControlStateChanges(nextState);
        }
        if (nextState.reset) {
          this.renderSubFormErrors(nextState);
        }
      });

    this.subFormValueChangeSubscription$ = this.subForm.valueChanges
      .pipe(map(value => ({value, pristine: this.subForm.pristine, valid: this.subForm.valid})))
      .pipe(distinctUntilChanged(_isEqual))
      .subscribe(state => this.onActionSubFormValue(state));

      this.subFormStatusChangeSubscription$ = this.subForm.statusChanges
      // this delay is due to a bug in angular - it does not emit always the exact status change
      // but always emits when it's happening, so if you wait "enough" the validity value will be ok
      .pipe(delay(100))
      .pipe(map(_ => ({pristine: this.subForm.pristine, valid: this.subForm.valid})))
      .subscribe(status => this.onActionSubFormStatus(status));
  }

  reducer(state: ControlledSubFormState, action: {__type: string, payload: any}): ControlledSubFormState {
    const newState: ControlledSubFormState = _cloneDeep(state);
    newState.reset = false;
    switch (action.__type) {
      case ACTION_CTRL_VALUE_INIT: {
        const mappedCtrlValue = this.mapControlValueToSubForm(action.payload.value);
        newState.control.value = action.payload.value;
        newState.control.pristine = true;

        if (_isEqual(newState.subForm.value, mappedCtrlValue) && !action.payload.ctrlValidator) {
          // in case of INIT control should take the validity from sub-form
          newState.control.valid = newState.subForm.valid;
        } else {
          newState.control.valid = true;
          newState.subForm.valid = true;
        }
        newState.subForm.value = mappedCtrlValue;
        return newState;
      }
      case ACTION_CTRL_VALUE_CHANGE: {
        const mappedCtrlValue = this.mapControlValueToSubForm(action.payload.value);
        newState.control = {...newState.control, ...action.payload};
        newState.subForm.value = mappedCtrlValue;
        if (newState.control.pristine) {
          newState.subForm.pristine = true;
        }
        if (_isEqual(newState.subForm.value, state.subForm.value) && !action.payload.ctrlValidator) {
          // after ctrl value change (e.g. reset) subForm value remained stale
          // but ctrl does not have a validator - it's validity has to be taken from subForm
          // need to reset to call render as ctrl.state may remain stale
          newState.reset = newState.control.valid !== newState.subForm.valid;
          newState.control.valid = newState.subForm.valid;
        }
        return newState;
      }
      case ACTION_SUB_FORM_VALUE_CHANGE: {
        newState.subForm = {...newState.subForm, ...action.payload};
        const mappedSubFormValue = this.mapSubFormValueToControl(state.control.value, action.payload.value);
        newState.control.value = mappedSubFormValue;
        if (!newState.subForm.pristine) {
          newState.control.pristine = false;
        }
        newState.control.valid = action.payload.valid;
        return newState;
      }
      case ACTION_SUB_FORM_STATUS_CHANGE: {
        newState.subForm.valid = action.payload.valid;
        newState.subForm.pristine = action.payload.pristine;
        if (!newState.subForm.pristine) {
          newState.control.pristine = false;
        }
        newState.control.valid = action.payload.valid;
        return newState;
      }
      default:
        return state;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.disabled) {
      changes.disabled.currentValue ? this.subForm.disable() : this.subForm.enable();
    }
    if (changes.control && changes.control.currentValue && changes.control.firstChange) {
      this.action$.next({__type: ACTION_CTRL_VALUE_INIT, payload: {
        value: this.control.value,
        valid: this.control.valid,
        ctrlValidator: !!this.control.validator
      }});
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.ctrlValueChange$ = this.control.valueChanges
        .pipe(map(value => ({value, valid: this.isControlValid, pristine: this.control.pristine})))
        .subscribe((value) => this.onActionControlValue(value));
    });
  }

  ngOnDestroy() {
    if (!! this.stateSubscription$) {
      this.stateSubscription$.unsubscribe();
    }
    if (!!this.ctrlValueChange$) {
      this.ctrlValueChange$.unsubscribe();
    }
    if (!!this.subFormValueChangeSubscription$) {
      this.subFormValueChangeSubscription$.unsubscribe();
    }
    if (!!this.subFormStatusChangeSubscription$) {
      this.subFormStatusChangeSubscription$.unsubscribe();
    }
  }

  protected abstract getSubFormConfig(): SubFormTypeConfig<SubFormType>;

  renderControlStateChanges(state: ControlledSubFormState) {
    let result = false;
    if (!_isEqual(state.control.value, this.control.value) && _isEqual(state.subForm.value, this.subForm.value)) {
      // the state.ctrl.value change comes from the subForm value.change => just update the ctrl
      this.control.setValue(state.control.value, { emitEvent: false });
      result = true;
    }
    if (!state.control.pristine && this.control.pristine) {
      this.control.markAsDirty({ onlySelf: true });
      result = true;
    }
    if (!state.control.valid  && this.control.valid && !this.control.validator) {
      const ctrlSelfErrors = _omit(this.control.errors || {}, ['subFormError']);
      const errors = Object.assign({}, ctrlSelfErrors, { subFormError: true });
      this.control.setErrors(errors, { emitEvent: false });
      result = true;
    }
    if (state.control.valid && !this.control.valid && !this.control.validator) {
      const ctrlSelfErrors = _omit(this.control.errors || {}, ['subFormError']);
      this.control.setErrors(_isEmpty(ctrlSelfErrors) ? null : ctrlSelfErrors, { emitEvent: false });
      result = true;
    }
    if (result && this.control.parent instanceof AbstractControl) {
      this.control.parent.updateValueAndValidity();
    }
  }

  renderSubFormErrors(state: ControlledSubFormState) {
    let result = false;
    if (!state.control.valid  && this.control.valid && !this.control.validator) {
      const ctrlSelfErrors = _omit(this.control.errors || {}, ['subFormError']);
      const errors = Object.assign({}, ctrlSelfErrors, { subFormError: true });
      this.control.setErrors(errors, { emitEvent: false });
      result = true;
    }
    if (state.control.valid && !this.control.valid && !this.control.validator) {
      const ctrlSelfErrors = _omit(this.control.errors || {}, ['subFormError']);
      this.control.setErrors(_isEmpty(ctrlSelfErrors) ? null : ctrlSelfErrors, { emitEvent: false });
      result = true;
    }
    if (result && this.control.parent instanceof AbstractControl) {
      this.control.parent.updateValueAndValidity();
    }
  }

  renderSubFormStateChanges(state: ControlledSubFormState) {
    if (!_isEqual(state.subForm.value, this.subForm.value) && _isEqual(state.control.value, this.control.value)) {
      // the state.subForm.value change comes from the ctrl value change => just update the subForm
      if (state.control.pristine) {
        // if we've reset the control value => reset the value for subForm
        const subFormNewValue: any = {};
        Object.keys(state.subForm.value).forEach(field => {
          if (this.subForm.get(field)) {
            subFormNewValue[field] = state.subForm.value[field];
          }
        });
        this.subForm.reset(subFormNewValue, { onlySelf: true });
      } else {
        const subFormNewValue: any = {};
        // if the control value has just changed => update the value of the changed fields only
        Object.keys(state.subForm.value).forEach(field => {
          const isFieldDiffersFromState = !_isEqual(state.subForm.value[field], (this.subForm.get(field) as AbstractControl).value);
          if (this.subForm.get(field) && isFieldDiffersFromState) {
            subFormNewValue[field] = state.subForm.value[field];
          }
        });
        if (!_isEmpty(subFormNewValue)) {
          this.subForm.patchValue(subFormNewValue, { onlySelf: true });
          this.subForm.markAsDirty();
        }
      }
    }
  }

  protected abstract mapControlValueToSubForm(value: ControlType): SubFormType;
  protected abstract mapSubFormValueToControl(oldCtrlValue: ControlType, newSubFormValue: SubFormType): ControlType;

  private onActionControlValue(value: FormState) {
    this.action$.next({__type: ACTION_CTRL_VALUE_CHANGE, payload: value});
  }

  private onActionSubFormStatus(status: {valid: boolean, pristine: boolean}) {
    this.action$.next({__type: ACTION_SUB_FORM_STATUS_CHANGE, payload: status});
  }

  private onActionSubFormValue(state: FormState) {
    this.action$.next({__type: ACTION_SUB_FORM_VALUE_CHANGE, payload: state});
  }

  protected get isSubFormValid() {
    return this.subForm.valid || this.subForm.disabled;
    // DISABLED is considered valid by default
  }

  protected get isControlValid() {
    return this.control.valid || this.control.disabled;
    // DISABLED is considered valid by default
  }

  protected getSubFormOptions(): any {
    return {};
  }
}
