import { Component, Input } from '@angular/core';

import {Product} from '../../models/product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  @Input() products: Product = {
    id: '',
    name: '',
    price: 0,
    imagen: ''
  }

}
