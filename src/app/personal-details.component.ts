import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { pick as _pick, cloneDeep as _cloneDeep } from 'lodash';
import { ControlledSubForm } from './controlled-sub-form';
import { ContactDetailsCIO } from '../api/check-in.types';

interface SubFormType {
  name: string;
  surname: string;
  gender: any;
  selected: boolean;
  contactDetails: Array<ContactDetailsCIO>;
}

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html'
})
export class PersonalDetailsComponent extends ControlledSubForm<any, SubFormType> {
  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }

  getSubFormConfig() {
    return {
      name: ['', Validators.required],
      surname: '',
      gender: null,
      contactDetails: [],
      selected: false
    };
  }

  protected mapControlValueToSubForm(value): SubFormType {
    if (!value) {
      return {name: '', surname: '', gender: null, selected: false, contactDetails: []};
    }
    return _pick(value, ['name', 'surname', 'gender', 'selected', 'contactDetails']);
  }

  protected mapSubFormValueToControl(oldCtrlValue: any, newSubFormValue: SubFormType): any {
    const result = _cloneDeep(oldCtrlValue) || {};
    result.name = newSubFormValue.name;
    result.surname = newSubFormValue.surname;
    result.gender = newSubFormValue.gender;
    result.selected = !!newSubFormValue.selected;
    result.contactDetails = newSubFormValue.contactDetails;
    return result;
  }
}
