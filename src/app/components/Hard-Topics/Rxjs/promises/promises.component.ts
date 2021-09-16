import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css'],
})
export class PromisesComponent implements OnInit {
  constructor() { }

  DellAvailable() {
    return false;
  }
  HpAvailable() {
    return false;
  }
  promiseValue: any;

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      this.DellAvailable()
        ? setTimeout(() => resolve('Dell Is Purchased'), 3000)
        : this.HpAvailable()
          ? setTimeout(() => resolve('Hp Is Purchased'), 3000)
          : reject('Laptop is not available on store');
    });

    buyLaptop
      .then((response) => {
        console.log('Then Code =>', response);
        this.promiseValue = response
      })
      .catch((err) => {
        console.log('Error Code =>', err);
        this.promiseValue = err;
      });
  }
}
