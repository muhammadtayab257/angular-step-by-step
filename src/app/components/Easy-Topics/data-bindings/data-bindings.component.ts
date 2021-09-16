import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindings',
  templateUrl: './data-bindings.component.html',
  styleUrls: ['./data-bindings.component.css']
})
export class DataBindingsComponent implements OnInit {

  constructor() { }
  name = `I'm Bindeded Through Interpolation`;
  firstName:string = 'First Name';

  onButtonClicked(evt: MouseEvent) {
    this.name = `I'm Changed Through Click Event`;
    console.log(evt);

  }

  ngOnInit(): void {
  }

}
