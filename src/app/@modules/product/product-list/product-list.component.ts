import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { PRODUCT_MODEL } from '../../../@models/_product-model/_product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  rowData: PRODUCT_MODEL[] = [
    {
      product_id: 12,
      product_name: "Model Y",
      price: 64950,
      product_size: "",
      sku_cod: "",
      product_description: "",
      product_image: "",
      quantity: 0,
      in_stock: false,
      category_id: 0,
      isDeleted: false
    },

    {
      product_id: 12,
      product_name: "Model Y",
      price: 64950,
      product_size: "",
      sku_cod: "",
      product_description: "",
      product_image: "",
      quantity: 0,
      in_stock: false,
      category_id: 0,
      isDeleted: false
    },

  ]
  colDefs: ColDef[] = [
    { field: "product_id" },
    { field: "product_name" },
    { field: "price" },
    { field: "sku_cod" },
    { field: "quantity" },
    { field: "in_stock" }
  ];


}
