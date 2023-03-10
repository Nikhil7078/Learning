import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
  styles: [
  ]
})
  
export class FiltersComponent implements OnInit {

  constructor() { }
  
  @Output() showCategory = new EventEmitter<string>();

  categories = ['shoes', 'sport'];

  ngOnInit(): void {
  }
  onShowcategory(category : string): void 
  {
    this.showCategory.emit(category);
  }
}
