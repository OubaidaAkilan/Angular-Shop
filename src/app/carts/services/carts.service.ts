import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { environment } from 'src/environments/evnironment';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  private cart: Cart[] = [];

  constructor(private http: HttpClient) {
    this.getCartFromLocalStorage();
  }

  getCartFromLocalStorage(): void {
    this.cart = JSON.parse(localStorage.getItem('cart')!);
  }

  setCartToLocalStorage(arrOfCart: Cart[]): void {
    localStorage.setItem('cart', JSON.stringify(arrOfCart));
    this.getCartFromLocalStorage();
  }

  getCart(): any {
    return this.cart;
  }

  insertToCart(data: any): void {
    this.cart.push(data);
  }

  submitTheCartToBackend(model: any): any {
    return this.http.post(environment.baseFakeStoreAPI + '/carts', model);
  }
}
