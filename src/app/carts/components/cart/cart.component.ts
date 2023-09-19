import { Component, DoCheck, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { Cart } from 'src/app/shared/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, DoCheck {
  isLoading: boolean = false;

  cart: Cart[] = [];

  total: number = 0;

  succsess: boolean = false;

  constructor(private cartService: CartsService) {}
  ngDoCheck(): void {
    this.getTheTotalPriceForProductsWithinTheCart();
  }

  ngOnInit(): void {
    this.getCartData();
    this.getTheTotalPriceForProductsWithinTheCart();
  }

  getCartData(): void {
    this.cart = this.cartService.getCart();
  }

  getTheTotalPriceForProductsWithinTheCart(): void {
    this.total = 0;
    for (let idx in this.cart) {
      this.total += this.cart[idx].product.price * this.cart[idx].quantity;
    }
  }
  increaseTheQuantity(idx: number): void {
    this.cart[idx].quantity++;
    // this.getTheTotalPriceForProductsWithinTheCart();
    this.cartService.setCartToLocalStorage(this.cart);
  }
  decreaseTheQuantity(idx: number): void {
    this.cart[idx].quantity--;
    // this.getTheTotalPriceForProductsWithinTheCart();
    this.cartService.setCartToLocalStorage(this.cart);
  }

  detectChange(): void {
    this.cartService.setCartToLocalStorage(this.cart);
  }

  deleteTheProductFromCart(idx: number): void {
    this.cart.splice(idx, 1);
    this.cartService.setCartToLocalStorage(this.cart);
  }

  clearTheProductsFromCart(): void {
    this.cart = [];
    this.cartService.setCartToLocalStorage(this.cart);
  }

  submitTheCart(): void {
    this.isLoading = true;
    const products = this.cart.map((item) => {
      return {
        productId: item.product.id,
        quantity: item.quantity,
      };
    });

    const model = {
      userId: 5,
      date: new Date(),
      products: products,
    };

    this.cartService.submitTheCartToBackend(model).subscribe(
      (res: any) => {
        this.isLoading = false;
        this.succsess = true;
      },
      (err: any) => {
        this.isLoading = false;
        alert(err.message);
      }
    );
  }
}
