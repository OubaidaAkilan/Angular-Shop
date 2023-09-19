import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.scss'],
})
export class DetailsProductsComponent implements OnInit {
  id!: number;
  data!: Product;
  isLoading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}
  ngOnInit(): void {
    this.getProductByIdHandle();
  }

  getProductByIdHandle() {
    this.isLoading = true;

    this.id = +this.activatedRoute.snapshot.params['id'];
    this.productsService.getProductById(this.id).subscribe(
      (res: any) => {
        this.data = res;
        this.isLoading = false;
      },
      (err: any) => {
        alert(`Cant retrive this product with this  id : ${this.id}`);
        this.isLoading = false;
      }
    );
  }
}
