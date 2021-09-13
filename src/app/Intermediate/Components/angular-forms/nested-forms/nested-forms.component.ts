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
  fruits: Array<String> = ['Mango', 'Grapes', 'Strawberry', 'Oranges'];
  states: Array<String> = [
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
  productForm!: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.nestedForm = this._fb.group({
      firstName: ['First Name', Validators.required],
      lastName: ['Last Name', Validators.required],
      favFruits: this.addFruitsControls(),
      address: this._fb.array([this.addAddressGroup()]),
    });

    // PRODUCT FORM ADD ROW DYNAMICALLY
    this.productForm = this._fb.group({
      name: '',
      quantities: this._fb.array([]),
    });
  }

  addFruitsControls() {
    const arr = this.fruits.map((f) => {
      return this._fb.control(true);
    });
    return this._fb.array(arr);
  }
  addAddressGroup() {
    return this._fb.group({
      streetAddress: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      zipcode: [null, [Validators.required, Validators.pattern('^[0-9]{5}$')]],
    });
  }
  get fruitsArray(): FormArray {
    return this.nestedForm.get('favFruits') as FormArray;
  }
  quantities(): FormArray {
    return this.productForm.get('quantities') as FormArray;
  }

  newQuantity(): FormGroup {
    return this._fb.group({
      qty: '',
      price: '',
    });
  }
  addQuantity() {
    this.quantities().push(this.newQuantity())
  }

  removeQuantity(i: any) {
    this.quantities().removeAt(i);
   }
}
