import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingRelatedModule } from './routing-related-module.module';
import { AllProductsComponent } from './all-products/all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
const routes: Routes = [
  {
    path: 'Products', component: AllProductsComponent

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule { }
