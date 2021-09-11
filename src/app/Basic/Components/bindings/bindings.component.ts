import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {


  placeholder_text: string = "Name";
  username: string = "admin";
  isDisabled: boolean = true;
  innerHtml: string = "Hello This Is InnerHtml";
  cssStringVar: string = "red size20  border30";
  cssStringVar1: string = "red size10";
  cssStringVar2: string[] = ["red", "size10"];
  color: string = 'red';
  getClass() {
    return 'red';
  }
  hasError() {
    return true;
  }

  click: number = 0;
  clickCount() {
    this.click++;
  }

  value = "";
  handleInput(event: any) {
    this.value = (event.target as HTMLInputElement).value;
  }
  constructor() { }

  ngOnInit(): void {
    this.cssStringVar2.push('border30');
  }

}
