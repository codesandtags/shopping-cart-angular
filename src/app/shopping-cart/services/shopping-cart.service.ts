import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  products: Product[];
  LOCAL_STORAGE_KEY = 'songs';

  public removedProductSubject = new Subject<boolean>();

  constructor() {
    this.products = [];
  }

  public addProduct(product: Product): void {
    this.products.push(product);
    this.updateStorageProducts();
  }

  public removeProduct(product: Product): void {
    this.products = this.products.filter(currentProduct => currentProduct.id !== product.id);
    this.updateStorageProducts();
    this.removedProductSubject.next(true);
  }

  public getTotal(): number {
    const totalPrice = this.products
      .reduce((previousValue: number, currentValue: Product) => {
        return previousValue + currentValue.price;
      }, 0);
    console.log('Get Total', totalPrice);

    return totalPrice;
  }

  public getProducts(): Product[] {
    const storedSongs = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    if (storedSongs) {
      this.products = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY));
      return this.products;
    }

    return this.products;
  }

  private updateStorageProducts(): void {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.products));
  }
}
