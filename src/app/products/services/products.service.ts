import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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

  getCategories(): any {
    return this.http.get(environment.baseFakeStoreAPI + '/products/categories');
  }
} // End  class ProductsService
