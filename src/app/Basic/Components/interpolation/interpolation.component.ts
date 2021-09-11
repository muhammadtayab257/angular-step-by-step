import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  company_name: string = 'Microsoft';
  employes: number = 234;
  ceo_salary: number = 543254;
  ceo_son_salary: number = 65445;

  constructor() { }

  ngOnInit(): void {
  }

}
