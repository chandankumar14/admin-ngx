import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './@modules/dashboard/dashboard.component';

const routes: Routes = [
  
  {
    path:"product",
    loadChildren:()=>import("./@modules/product/product.module").then(m=>m.ProductModule)
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
