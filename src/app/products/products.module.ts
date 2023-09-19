import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { DetailsProductsComponent } from './components/details-products/details-products.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllProductsComponent,
    DetailsProductsComponent,
    ProductComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule],
})
export class ProductsModule {}
