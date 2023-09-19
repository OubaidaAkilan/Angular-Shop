import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { DetailsProductsComponent } from './products/components/details-products/details-products.component';
import { CartComponent } from './carts/components/cart/cart.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AllProductsComponent,
  },
  {
    path: 'products/:id',
    component: DetailsProductsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class RoutingModule {}
