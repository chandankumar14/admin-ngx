import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent, pathMatch: 'full' },
  { path: 'product-detail', component: ProductDetailsComponent },
  { path: "add-edit", component: ProductAddEditComponent },
  { path: '', redirectTo: 'product-list', pathMatch: 'full' },
  { path: '**', redirectTo: 'product-list', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule { }
