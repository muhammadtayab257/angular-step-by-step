import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // If another error found then return
      return;
    }

    // set error on matchingControl if validation fails
    control.value != matchingControl.value
      ? matchingControl.setErrors({ mustMatch: true })
      : matchingControl.setErrors(null);
  };
}
