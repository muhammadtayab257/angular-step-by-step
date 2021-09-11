import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { User } from '../../../../Shared/interface1';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css'],
})
export class TemplateDrivenFormsComponent implements OnInit {
  userOne: any;
  //
  onSubmit(contactForm: any) {
    console.log(contactForm.value);
  }
  //
  getData(value: User) {
    console.log(value);
  }

  constructor() { }
  ngOnInit(): void {
    this.userOne = {
      fname: 'Sachin',
      lname: 'Tendulkar',
      email: 'sachin@gmail.com',
    };

    // Custom Validator Function
    function quantityRangeValidator(min: number = 8, max: number = 12) {
      return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (
          (control.value != null && isNaN(control.value)) ||
          control.value < min ||
          control.value > max
        ) {
          return { quantityRange: true };
        }

        return null;
      };
    }
  }
}
