import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/service/cart.service';
import { StoreService } from 'src/app/service/store.service';

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
  count: number | undefined;
  sort: string | undefined;
  products: Array<Product> | undefined;
  productsubcription: Subscription | undefined;
  AllCategory: Array<string> | undefined;

  constructor(private cartService: CartService, private storeService: StoreService) { }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HIGHTS[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategory();
  }
  
  getProducts(): void {
    this.productsubcription = this.storeService.getAllProducts(this.count, this.sort,this.category)
      .subscribe((_products) => {
        this.products = _products;
      });
  }

  getCategory(): void {
    this.storeService.getAllCategory().subscribe((_category) => {
      this.AllCategory = _category;
      // console.log(this.AllCategory);
    });
  }

  OnitemCountChange(count : number) {
    this.count = count;
    this.getProducts();
  }

  onSortChange(sort:string) {
    this.sort = sort;
    this.getProducts();
  }
}
