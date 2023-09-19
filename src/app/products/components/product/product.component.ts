import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { CartsService } from 'src/app/carts/services/carts.service';
import { Cart } from 'src/app/shared/models/cart.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input('productData') data: Product | any;

  @Output('addProductToCart') addProductToCart = new EventEmitter();

  quantity: number = 0;

  cart: Cart[] = [];

  cartStatus: boolean = false;

  constructor(private cartServices: CartsService) {}

  ngOnInit(): void {
    this.cart = this.cartServices.getCart();
    this.checkTheProductWithinTheCart();
  }

  checkTheProductWithinTheCart(): void {
    this.cartStatus = this.cart.some((item: Cart) => {
      if (item.product.id === this.data.id) {
        this.quantity = item.quantity;
        return true;
      } else {
        return false;
      }
    });
  }
  onAddToCartHandle(): void {
    this.quantity =1
    let event = {
      product: this.data,
      quantity: this.quantity,
    };
    this.addProductToCart.emit(event);
    this.cartStatus = true;
  }

  onEditTheQuantityOfProductWithinTheCart(id: number): void {
    let indexOfItem = this.cart.findIndex(
      (item: any) => item.product.id === id
    );

    this.cart.at(indexOfItem)!.quantity = this.quantity;
    this.cartServices.setCartToLocalStorage(this.cart);
  }
}
