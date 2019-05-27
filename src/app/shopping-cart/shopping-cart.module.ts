import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartDashboardComponent } from './components/shopping-cart-dashboard/shopping-cart-dashboard.component';
import { ShoppingCartProductComponent } from './components/shopping-cart-product/shopping-cart-product.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartProductListComponent } from './components/shopping-cart-product-list/shopping-cart-product-list.component';

@NgModule({
  declarations: [
    ShoppingCartDashboardComponent,
    ShoppingCartProductComponent,
    ShoppingCartProductListComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule {
}
