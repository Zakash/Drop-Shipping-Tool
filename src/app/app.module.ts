import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { FinanceComponent } from './finance/finance.component';
import { ShippingComponent } from './shipping/shipping.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {APP_ROUTES} from './app.routes';
import { RouterModule } from '@angular/router';
import { AppnavComponent } from './appnav/appnav.component';
import { TableEditableComponent } from './table-editable/table-editable.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderDetailComponent,
    FinanceComponent,
    ShippingComponent,
    AdminComponent,
    PageNotFoundComponent,
    AppnavComponent,
    TableEditableComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
