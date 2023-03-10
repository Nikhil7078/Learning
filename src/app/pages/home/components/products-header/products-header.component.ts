import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl:'products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {
  
  sort = 'desc'
  itemShowcount = 12;
  @Output() columnsCountChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  onSortUpdated(newSort :string) :void{
    this.sort = newSort;
  }
  onItemsUpdated(count: number): void {
    this.itemShowcount = count;
  }
  onColumnUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }


}
