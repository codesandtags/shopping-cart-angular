import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartDashboardComponent } from './components/shopping-cart-dashboard/shopping-cart-dashboard.component';
import { ShoppingCartProductComponent } from './components/shopping-cart-product/shopping-cart-product.component';

@NgModule({
  declarations: [
    ShoppingCartDashboardComponent,
    ShoppingCartProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShoppingCartModule {
}
