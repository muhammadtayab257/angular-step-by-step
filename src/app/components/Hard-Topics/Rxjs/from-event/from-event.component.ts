import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let data = document.querySelector("datta");
    data?.classList.toggle("hidden");
  }




}
