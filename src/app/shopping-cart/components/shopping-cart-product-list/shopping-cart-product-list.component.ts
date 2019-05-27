import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { MockUtils } from '../../mocks/mock-utils';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-product-list',
  templateUrl: './shopping-cart-product-list.component.html',
  styleUrls: ['./shopping-cart-product-list.component.scss']
})
export class ShoppingCartProductListComponent implements OnInit {

  products: Product[] = MockUtils.generateProducts(9);

  constructor(private shoppingService: ShoppingCartService) {
  }

  ngOnInit() {
  }

  addProduct(product: Product) {
    this.shoppingService.addProduct(product);
  }
}
