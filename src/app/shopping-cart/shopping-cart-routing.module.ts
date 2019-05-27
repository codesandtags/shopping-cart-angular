import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartProductListComponent } from './components/shopping-cart-product-list/shopping-cart-product-list.component';
import { ShoppingCartDashboardComponent } from './components/shopping-cart-dashboard/shopping-cart-dashboard.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: ShoppingCartDashboardComponent
}, {
  path: 'dashboard',
  component: ShoppingCartDashboardComponent
}, {
  path: 'products',
  component: ShoppingCartProductListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule {
}
