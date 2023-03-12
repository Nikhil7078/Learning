import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const BASE_URL = "https://fakestoreapi.com";

@Injectable({
  providedIn: 'root'
})

export class StoreService {
  constructor(private httpClient: HttpClient) { }

  getAllProducts(limit = 12, sort = 'desc', category?: string): Observable<Array<Product>> {
    const url = `${BASE_URL}/products${category ? '/category/' + category : ''}?sort=${sort}&limit=${limit}`;
    return this.httpClient.get<Array<Product>>(url);
    // console.log(url);
  }
  getAllCategory(): Observable<Array<string>> {
    const url = `${BASE_URL}/products/categories`;
    return this.httpClient.get<Array<string>>(url);
  }
}
