import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/shared/models/product';
import { Subscription } from 'rxjs';
import { CartsService } from 'src/app/carts/services/carts.service';
import { Cart } from 'src/app/shared/models/cart';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit, OnDestroy {
  cart: Cart[] = [];
  products: Product[] = [];
  categories: string[] = [];
  categorySelected: string = 'all';
  isLoading: boolean = false;
  subscription: Subscription | undefined;

  constructor(
    private productService: ProductsService,
    private cartService: CartsService
  ) {}
  //==== Start LifeCycle hooks funs. ====//
  ngOnInit(): void {
    this.subscription = this.productService.categorySelected.subscribe(
      (category: string) => {
        this.categorySelected = category;
        this.getProducts(category);
      }
    );
    this.getCategories();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  //==== End LifeCycle hooks funs. ====//

  //==== Start getProducts() fun. ====//
  getProducts(category: string): void {
    this.isLoading = true;
    this.productService.getAllProducts(category).subscribe(
      (res: Product[]) => {
        this.products = res;
        this.isLoading = false;
      },
      (err: any) => {
        alert(err.message);
        this.isLoading = false;
      },
      (complete: any) => {
        // console.log('complete');
      }
    );
  }
  //==== End getProducts() fun.====//

  //==== Start getCategories() fun.====//
  getCategories(): void {
    this.productService.getCategories().subscribe(
      (res: string[]) => {
        this.categories = res;
      },
      (err: any) => {
        alert(err.message);
      }
    );
  }
  //==== End getCategories() fun.====//

  //==== Start filterCategory() fun.====//
  filterCategory(event: any): void {
    this.productService.categorySelected.next(event.target.value);
  }
  //==== End filterCategory() fun.====//

  //==== Start addToCartHandle() fun.====//
  addToCartHandle(event: any): void {
    if ('cart' in localStorage) {
      this.cart = this.cartService.getCart();

      let theProductIsExistWithinCart = this.cart.find(
        (item) => item.product.id === event.product.id
      );

      if (theProductIsExistWithinCart) {
        alert('The product is already exist within the cart');
      } else {
        this.cart.push(event);

        this.cartService.setCartToLocalStorage(this.cart);
      }
    } else {
      this.cart.push(event);

      this.cartService.setCartToLocalStorage(this.cart);
    }
  }
  //==== End addToCartHandle() fun.====//
} // End class AllProductsComponent
