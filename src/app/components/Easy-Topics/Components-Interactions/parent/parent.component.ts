import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  constructor() { }

  userLogedIn: boolean = true;
  changeLoginStatus() {
    this.userLogedIn = !true ? true : false
  }

  // Another Example of ParentComponent to ChildComponent data Transformation

  public userName: string = '';
  public userPhone: string = '';

  ngOnInit(): void { }

}
