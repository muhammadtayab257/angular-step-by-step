import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-communication',
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.css']
})
export class ComponentCommunicationComponent {
  foodArray: string[] = [];


  addTofood(value: any) {
    this.foodArray.push(value);
    console.log(this.foodArray);

  }


  constructor() { }



}
