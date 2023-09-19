import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product';

import { environment } from 'src/environments/evnironment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  categorySelected = new BehaviorSubject<string>('all');

  constructor(private http: HttpClient) {}

  getAllProducts(category: string): any {
    if (category !== 'all') {
      return this.http.get(
        environment.baseFakeStoreAPI + '/products/category/' + category
      );
    }
    return this.http.get(environment.baseFakeStoreAPI + '/products');
  }

  getProductById(id: number): any {
    return this.http.get(environment.baseFakeStoreAPI + '/products/' + id);
  }

  getCategories(): any {
    return this.http.get(environment.baseFakeStoreAPI + '/products/categories');
  }
} // End  class ProductsService
