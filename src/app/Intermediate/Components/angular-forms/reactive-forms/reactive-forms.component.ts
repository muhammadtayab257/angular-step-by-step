import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MustMatch } from '../../../../Shared/Validators/must-match.validator';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  userForm!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.warn(this.userForm.value);
  }
  ngOnInit() {
    this.userForm = this.fb.group(
      {
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        dob: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
            ),
          ],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
          ],
        ],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
      },

      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.userForm.controls;
  }
}
