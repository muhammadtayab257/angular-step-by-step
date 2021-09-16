import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() logedIn: boolean = false;
  @Input() userNameFromParent:string = '';
  @Input() userPhoneFromParent:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
