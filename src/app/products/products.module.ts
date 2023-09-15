import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { DetailsProductsComponent } from './components/details-products/details-products.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    DetailsProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
