import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'app-nested-forms',
  templateUrl: './nested-forms.component.html',
  styleUrls: ['./nested-forms.component.css'],
})
export class NestedFormsComponent implements OnInit {
  fruits: Array<string> = ['Mango', 'Grapes', 'Strawberry', 'Oranges'];
  states: Array<string> = [
    'Sindh',
    'Kashmir',
    'Balochistan',
    'Kpk',
    'Gilgit Baltistan',
    'Punjab',
    'Federal',
  ];
  favFruitsError: Boolean = true;
  selectedFruitValues = [];
  nestedForm!: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.nestedForm = this._fb.group({
      firstName: ['First Name', Validators.required],
      lastName: ['Last Name', Validators.required],
      favFruits: this.addFruitsControls(),
      address: this._fb.array([this.addAddressGroup()]),
    });
  }
  //
  addFruitsControls() {
    const arr = this.fruits.map((f) => {
      return this._fb.control(true)
    });
    return this._fb.array(arr);
  }
  // Address Array
  addAddressGroup() {
    return this._fb.group({
      primaryFlg: [],
      streetAddress: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      zipcode: [null, [Validators.required, Validators.pattern('^[0-9]{5}$')]]
    });
  }


  get fruitsArray() {
    return <FormArray>this.nestedForm.get('favFruits')
  }


}
