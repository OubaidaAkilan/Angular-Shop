import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, RoutingModule,ProductsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
