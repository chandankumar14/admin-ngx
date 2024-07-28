import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

interface IRow {
  make: string;
  model: string;
  price: number;
  
}
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  themeClass =
  "ag-theme-quartz";
  rowData:IRow[]  = [
    { make: 'Tesla', model: 'Model Y', price: 64950 },
    { make: 'Ford', model: 'F-Series', price: 33850 },
    { make: 'Toyota', model: 'Corolla', price: 29600 },
    { make: 'Mercedes', model: 'EQA', price: 48890 },
    { make: 'Fiat', model: '500', price: 15774 },
    { make: 'Nissan', model: 'Juke', price: 20675 },
];
  colDefs: ColDef[] = [
    { field: "make",filter: true },
    { field: "model",filter: true },
    { field: "price",filter: true },
    
  ];
}
