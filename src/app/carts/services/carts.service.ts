import { Injectable, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart.model';
import { Product } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  private cart: Cart[] = [];

  constructor() {
    this.getCartFromLocalStorage();
  }

  getCartFromLocalStorage(): void {
    this.cart = JSON.parse(localStorage.getItem('cart')!);
  }

  setCartToLocalStorage(arrOfCart: Cart[]): void {
    localStorage.setItem('cart', JSON.stringify(arrOfCart));
  }

  getCart(): any {
    return this.cart;
  }

  insertToCart(data: any): void {
    this.cart.push(data);
  }
}
