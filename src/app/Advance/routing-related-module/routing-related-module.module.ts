import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductRoutingModule } from './products-routing.module';
import { RoutingRelatedComponent } from './routing-related.component';


@NgModule({
  declarations: [
    AllProductsComponent,
    ViewProductComponent,
    EditProductComponent,
    RoutingRelatedComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,

  ],
  exports: [
    AllProductsComponent,
    ViewProductComponent,
    EditProductComponent,
    RoutingRelatedComponent
  ],
  bootstrap: [RoutingRelatedComponent],
  // providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class RoutingRelatedModule { }
