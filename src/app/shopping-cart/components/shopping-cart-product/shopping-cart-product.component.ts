import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-product',
  templateUrl: './shopping-cart-product.component.html',
  styleUrls: ['./shopping-cart-product.component.scss']
})
export class ShoppingCartProductComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private shoppingService: ShoppingCartService) {
  }

  ngOnInit() {
  }
}
