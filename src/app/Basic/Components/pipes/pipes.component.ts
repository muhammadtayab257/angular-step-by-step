import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  toDate: Date = new Date();
  msg: string= 'Welcome to Angular once again';
  constructor() { }

  ngOnInit(): void {
  }

}
