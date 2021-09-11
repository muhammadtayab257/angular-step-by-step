import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() foodEvt: EventEmitter<string> = new EventEmitter<string>();
  addTofood(val: string) {
    this.foodEvt.emit(val);

  }
  constructor() { }



}
