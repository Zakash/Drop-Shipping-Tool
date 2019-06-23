import { Routes } from '@angular/router';
import {OrdersComponent} from './orders/orders.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';

import {FinanceComponent} from './finance/finance.component';
import {ShippingComponent} from './shipping/shipping.component';
import {AdminComponent} from './admin/admin.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const APP_ROUTES: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: 'order/:id', component: OrderDetailComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'admin', component: AdminComponent},
  { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]
