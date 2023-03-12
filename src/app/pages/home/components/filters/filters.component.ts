import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
  styles: [
  ]
})
  
export class FiltersComponent implements OnInit {

  constructor() { }
  
  @Output() showCategory = new EventEmitter<string>();
  @Input() AllCategory :Array<string> | undefined;

  ngOnInit(): void {
  }

  onShowcategory(category : string): void 
  {
    this.showCategory.emit(category);
  }
   
}

