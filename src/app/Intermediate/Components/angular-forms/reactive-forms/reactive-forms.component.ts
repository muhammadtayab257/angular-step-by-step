import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  userForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.warn(this.userForm.value);
  }
  ngOnInit() {
    this.userForm = this.fb.group({
      firstname: ['', [Validators.required]],
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.userForm.controls;
  }
}
