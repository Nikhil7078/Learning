import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

const ROW_HIGHTS: { [id: number]: number } = {
  1: 400,
  3: 350,
  5: 300,
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})

export class HomeComponent implements OnInit {

  cols = 3;
  category: string | undefined;
  rowHeight = ROW_HIGHTS[this.cols];
  constructor() { }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HIGHTS[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
   
  onAddToCart(product: Product) {
    
  }

  ngOnInit(): void {
  }

}
