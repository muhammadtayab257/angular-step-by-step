import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../Interfaces/Products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private Api = "http://localhost:3000/products";
  constructor(private http: HttpClient) {
  }

  // Get All Products
  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.Api);
  }


}
