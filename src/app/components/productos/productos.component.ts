import { Component } from '@angular/core';
import {Product} from '../../models/product.model'
import { StoreService } from '../../services/store.service'
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

  myShoppingCart: Product[] = [];
  total = 0;

  products: Product[] = [];

  constructor(
    private storeService : StoreService,
    private productService : ProductService
  ){
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(data => {this.products = data})
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
