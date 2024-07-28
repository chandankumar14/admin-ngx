import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { AgGridAngular } from 'ag-grid-angular';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { EditorModule } from 'primeng/editor';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductAddEditComponent
  ],
  imports: [
    CommonModule,
    AgGridAngular,
    ProductRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    EditorModule
    
  ]
})
export class ProductModule { }
