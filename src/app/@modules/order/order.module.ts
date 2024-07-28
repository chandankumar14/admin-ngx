import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { ActiveOrderComponent } from './active-order/active-order.component';
import { CancelledOrderComponent } from './cancelled-order/cancelled-order.component';
import { CompletedOrderComponent } from './completed-order/completed-order.component';


@NgModule({
  declarations: [
    ActiveOrderComponent,
    CancelledOrderComponent,
    CompletedOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
