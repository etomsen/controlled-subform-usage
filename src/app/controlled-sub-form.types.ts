import { ValidatorFn, FormArray } from '@angular/forms';

export type SubFormTypeOption<SubFormType> = keyof SubFormType;

export type ValueValidatorTuple<ValueType> = Array<ValueType | ValidatorFn>;

export type SubFormTypeConfig<SubFormType> = {
  [o in SubFormTypeOption<SubFormType>]: SubFormType[o] | ValueValidatorTuple<SubFormType[o]> | FormArray
};

export interface OnSubFormValueUpdate {
  onSubFormValueUpdate();
}

export interface OnControlValueUpdate {
  onControlValueUpdate();
}

