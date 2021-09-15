import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../Shared/Services/products.service';
import { Products } from '../../../Shared/Interfaces/Products';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  constructor(private products: ProductsService) {}

  ngOnInit(): void {
    this.products.getProducts().subscribe((data: Products[]) => {
      console.log(data);
    });
  }
}
