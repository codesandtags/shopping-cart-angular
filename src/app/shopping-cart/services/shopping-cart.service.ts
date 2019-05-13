import { Injectable } from '@angular/core';
import { ShoppingCartModel } from '../models/shopping-cart.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCart: ShoppingCartModel;

  constructor() {
    this.shoppingCart.products = [];
  }

  public addProduct(): void {
    // TODO: Add product logic
  }

  public removeProduct(): void {
    // TODO: Remove product logic
  }

  public getTotal(): number {
    // TODO: Retrieve the total of all products
    return 0;
  }

  public getProducts(): Product[] {
    return this.shoppingCart.products;
  }
}
