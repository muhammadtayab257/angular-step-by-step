import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserTwo } from '../Interfaces/UserTwo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  private api = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) { }


  public sendGetRequest(): Observable<UserTwo> {
    return this.httpClient.get<UserTwo>(this.api);
  }

}
