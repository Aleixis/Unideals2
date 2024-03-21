import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

interface SideNavToggle{
  screenWidth: number;
  collapsed:boolean;

}

@Component({
  selector: 'app-root',
  template: ` 
  <app-header [cart]="cart"></app-header>
  <router-outlet></router-outlet>
  `,
  styles: []
  
})
export class AppComponent implements OnInit{
 
  cart:Cart ={ items:[]};

constructor(private cartService:CartService){}



  ngOnInit() {
    this.cartService.cart.subscribe((_cart)=>{
      this.cart =_cart;
    })
  }
  isSideNavCollapsed = false;
  screenWidth =0;
  
  onToggleSideNav(data:SideNavToggle):void{
  this.screenWidth=data.screenWidth;
  this.isSideNavCollapsed=data.collapsed;
}


}