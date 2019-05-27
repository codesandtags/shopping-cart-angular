import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart-dashboard',
  templateUrl: './shopping-cart-dashboard.component.html',
  styleUrls: ['./shopping-cart-dashboard.component.scss']
})
export class ShoppingCartDashboardComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  totalPrice: number;
  removedSubscription: Subscription;

  constructor(private shoppingService: ShoppingCartService) {
  }

  ngOnInit() {
    this.products = this.shoppingService.getProducts();
    this.totalPrice = this.shoppingService.getTotal();

    this.removedSubscription = this.shoppingService.removedProductSubject.subscribe(() => {
      this.products = this.shoppingService.getProducts();
      this.totalPrice = this.shoppingService.getTotal();
    });
  }

  removeProduct(product: Product) {
    this.shoppingService.removeProduct(product);
  }

  ngOnDestroy(): void {
    if (this.removedSubscription) {
      this.removedSubscription.unsubscribe();
    }
  }
}
