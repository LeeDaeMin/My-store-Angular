import { Component, Input, Output, EventEmitter } from '@angular/core';

import {Product} from '../../models/product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  @Input() products: Product = {
    id: '',
    title: '',
    price: 0,
    image: '',
    descripcion: '',
    category: ''
  }

  @Output() addProduct = new EventEmitter<Product>();

  onAddToCart() {
    this.addProduct.emit(this.products);
  }
}
