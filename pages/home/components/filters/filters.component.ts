import { Component, EventEmitter, OnDestroy, OnInit,Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl:'filters.component.html'
})
export class FiltersComponent implements OnInit, OnDestroy{
  @Output() showCategory =new EventEmitter<string>();

  categoriesScription:Subscription | undefined;

  categories: Array<string> | undefined;

  constructor(private storeService:StoreService){

  }


  ngOnInit():void{
    this.categoriesScription =this.storeService.getAllCategories()
    .subscribe((response)=>{this.categories=response;});
    

  }

  onShowCategory(category:string):void{
    this.showCategory.emit(category);

  }

  ngOnDestroy(): void {
    if(this.categoriesScription){
      this.categoriesScription.unsubscribe();
    }
  }
}
