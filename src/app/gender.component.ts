import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { cloneDeep as _cloneDeep} from 'lodash';
import { ControlledSubForm } from './controlled-sub-form';

interface SubFormType {
  code: string;
}



@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html'
})
export class GenderComponent extends ControlledSubForm<any, SubFormType> {
  public labels = [
    { value: 'MALE', display: 'male' },
    { value: 'FEMALE', display: 'female' }
  ];

  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }

  getSubFormConfig() {
    return {
      code: ['', Validators.required]
    };
  }

  protected mapControlValueToSubForm(value): SubFormType {
    return {
      code: value ? value.code : ''
    };
  }

  protected mapSubFormValueToControl(oldCtrlValue: any, newSubFormValue: SubFormType): any {
    if (!newSubFormValue.code) {
      return _cloneDeep(oldCtrlValue);
    }
    return { code: newSubFormValue.code };
  }
}
