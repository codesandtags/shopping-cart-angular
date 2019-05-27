import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  products: Product[];

  public removedProductSubject = new Subject<boolean>();

  constructor() {
    this.products = [];
  }

  public addProduct(product: Product): void {
    this.products.push(product);
    console.log('Added product', this.products);
  }

  public removeProduct(product: Product): void {
    console.log('Removed product', product);
    this.products = this.products.filter(currentProduct => currentProduct.id !== product.id);

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
    console.log('Get Products', this.products);
    return this.products;
  }
}
