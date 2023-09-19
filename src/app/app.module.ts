import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './app-routing.module';
import { ProductsModule } from './products/products.module';
import { CartsService } from './carts/services/carts.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, RoutingModule, ProductsModule],
  providers: [CartsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
