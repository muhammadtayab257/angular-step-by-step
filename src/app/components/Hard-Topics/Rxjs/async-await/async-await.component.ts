import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let promiseFunction = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise Resolved")
      }, 3000)

    })

    const getData = async () => {
      let response = await promiseFunction;
      console.log(response);

    }
    getData();

    console.log("After Promise Resolved");


  }

}
