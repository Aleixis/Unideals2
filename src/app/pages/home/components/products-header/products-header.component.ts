import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange=new EventEmitter<number>();
  @Output() itemsCountChange=new EventEmitter<number>();
  @Output() sortCountChange=new EventEmitter<string>();
  sort ="desc";
  itemsShowCount=12;


  onSortUpdated(newSort:string):void{
    this.sort=newSort;
    this.sortCountChange.emit(newSort);

  }

  onItemsUpdated(count:number):void{
    this.itemsShowCount=count;
    this.itemsCountChange.emit(count);

  }

  onColumnsUpdated(colsNum:number):void{
    this.columnsCountChange.emit(colsNum);

  }

}
