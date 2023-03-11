import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl:'product-box.component.html',
  styles: [
  ]
})
  
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;

  product: Product | undefined = {
    id: 1,
    name: 'Snickers',
    title: '',
    description: 'Description',
    image: 'https://via.placeholder.com/150',
    category: 'shoes',
    price:150
  };

  @Output() addToCart = new EventEmitter<Product>()     

  constructor() { }
    
  ngOnInit(): void {
  }

  onAddCart():void {
    this.addToCart.emit(this.product);
  }
}
