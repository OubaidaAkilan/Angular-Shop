import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/shared/models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  categories: string[] = [];
  categorySelected: string = 'all';

  subscription: Subscription | undefined;

  constructor(private productService: ProductsService) {}
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
    this.productService.getAllProducts(category).subscribe(
      (res: Product[]) => {
        this.products = res;
      },
      (err: any) => {
        alert(err.message);
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
} // End class AllProductsComponent
