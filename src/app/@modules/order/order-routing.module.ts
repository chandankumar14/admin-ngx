import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveOrderComponent } from './active-order/active-order.component';
import { CompletedOrderComponent } from './completed-order/completed-order.component';
import { CancelledOrderComponent } from './cancelled-order/cancelled-order.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'active-order', pathMatch: 'full'
  },
  {
    path: 'active-order', component: ActiveOrderComponent, pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'active-order', pathMatch: 'full'
  },
  {
    path: 'active-order', component: ActiveOrderComponent
  },
  {
    path: "completed-order", component: CompletedOrderComponent
  },
  {
    path: "cancelled-order", component: CancelledOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
