import { Component, Input, AfterViewInit } from '@angular/core';
import { FormBuilder, FormArray, ValidatorFn, FormGroup, FormControl } from '@angular/forms';
import { pick as _pick, cloneDeep as _cloneDeep, isEmpty as _isEmpty } from 'lodash';
import { ControlledSubForm } from './controlled-sub-form';

interface SubFormType {
  passengers: any[];
}

const PassengerListValidator: ValidatorFn = (subForm: FormGroup) => {
  const passengerFormArray = subForm.get('passengers') as FormArray;
  const errors = passengerFormArray.errors || {};
  const selected = passengerFormArray.length ? passengerFormArray.controls.some(ctrl => {
    return ctrl.value ? ctrl.value.selected : false;
  }) : false;
  selected ? delete errors['noPassengerSelected'] : errors['noPassengerSelected'] = 'No passenger selected';
  return _isEmpty(errors) ? null : errors;
};

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html'
})
export class PassengerListComponent extends ControlledSubForm<any, SubFormType> {
  @Input()control: FormControl;

  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }

  getSubFormConfig() {
    return {
      passengers: this.formBuilder.array([])
    };
  }

  getSubFormOptions() {
    return {
      validator: PassengerListValidator
    };
  }


  protected mapControlValueToSubForm(value): SubFormType {
    if (!value) {
      return {passengers: []};
    }
    const result = {passengers: _cloneDeep(value)};
    this.updatePassengersFormArray(result);
    return result;
  }

  updatePassengersFormArray(newState: SubFormType) {
    const oldLength = this.getPassengersArray().length;
    if (oldLength === newState.passengers.length) {
      return;
    }
    // save the ctrl value before cleaning the array
    while (this.getPassengersArray().length) {
      this.getPassengersArray().removeAt(0);
    }
    // don't need to add anything
    if (!newState.passengers.length) {
      return;
    }
    // add new controls
    newState.passengers.forEach(_ => {
      this.getPassengersArray().push(this.formBuilder.control(null));
    });
  }

  protected mapSubFormValueToControl(oldCtrlValue: any, newSubFormValue: SubFormType): any {
    return _cloneDeep(newSubFormValue.passengers);
  }

  getPassengersArray(): FormArray {
    return this.subForm.get('passengers') as FormArray;
  }

}
