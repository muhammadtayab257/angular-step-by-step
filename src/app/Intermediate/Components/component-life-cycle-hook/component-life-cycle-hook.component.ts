import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-life-cycle-hook',
  templateUrl: './component-life-cycle-hook.component.html',
  styleUrls: ['./component-life-cycle-hook.component.css']
})
export class ComponentLifeCycleHookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
