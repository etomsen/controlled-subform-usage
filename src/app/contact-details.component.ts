import { Component, Input, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { cloneDeep as _cloneDeep, get as _get } from 'lodash';

import { ContactDetailsCIO } from '../api/check-in.types';
import { ControlledSubForm } from './controlled-sub-form';

export const PHONE_NUMBER_PATTERN = '^[0-9().-]{10,15}';

type ControlType = Array<ContactDetailsCIO>;
interface SubFormType {
  emailAddress: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-contact-details',
  templateUrl: 'contact-details.component.html'
})
export class ContactDetailsComponent extends ControlledSubForm<ControlType, SubFormType> implements AfterViewInit {
  @Input() contactDetailsRequired = false;

  constructor(formBuilder: FormBuilder) {
    super(formBuilder);
  }

  getEmailAddressControl() {
    return this.subForm.get('emailAddress');
  }

  getPhoneNumberControl() {
    return this.subForm.get('phoneNumber');
  }

  protected getSubFormConfig() {
    return {
      emailAddress: '',
      phoneNumber: ''
    };
  }

  protected mapControlValueToSubForm(value: ControlType): SubFormType {
    if (!Array.isArray(value)) {
      return {
        emailAddress: '',
        phoneNumber: ''
      };
    }
    const email = value.find(contact => !!contact.emailAddress);
    const phoneNumber = value.find(contact => !!contact.phoneNumber);

    const result = {
      emailAddress: email ? email.emailAddress.newEmailAddress : '',
      phoneNumber: phoneNumber ? phoneNumber.phoneNumber.newPhoneNumber : ''
    };

    return result;
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.getPhoneNumberControl().setValidators(
      this.contactDetailsRequired ?
        [Validators.required, Validators.pattern(PHONE_NUMBER_PATTERN)] :
        Validators.pattern(PHONE_NUMBER_PATTERN)
    );
    this.getEmailAddressControl().setValidators(
      this.contactDetailsRequired ?
        [Validators.required, Validators.email] :
        Validators.email
    );
    setTimeout(_ => {
      this.getEmailAddressControl().markAsTouched();
      this.getEmailAddressControl().updateValueAndValidity();
      this.getPhoneNumberControl().markAsTouched();
      this.getPhoneNumberControl().updateValueAndValidity();
    });
  }

  protected mapSubFormValueToControl(oldOuter: ControlType, newInner: SubFormType): ControlType {
    const result: ControlType = _cloneDeep(oldOuter);
    if (!Array.isArray(result)) {
      return result;
    }
    if (result.find(contact => !!contact.emailAddress)) {
      const index = result.findIndex(contact => !!contact.emailAddress);
      result[index].emailAddress.newEmailAddress = newInner.emailAddress;
    } else {
      if (newInner.emailAddress) {
        result.push({ emailAddress: { newEmailAddress: newInner.emailAddress } });
      }
    }
    if (result.find(contact => !!contact.phoneNumber)) {
      const index = result.findIndex(contact => !!contact.phoneNumber);
      result[index].phoneNumber.newPhoneNumber = newInner.phoneNumber;
    } else {
      if (newInner.phoneNumber) {
      result.push({ phoneNumber: { newPhoneNumber: newInner.phoneNumber } });
      }
    }
    return result;
  }
}
