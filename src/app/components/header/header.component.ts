import { Component, Input } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> b5676b5c67b9e4c0e4c2d01490f0533b4a176bf6

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
<<<<<<< HEAD
=======
  
>>>>>>> b5676b5c67b9e4c0e4c2d01490f0533b4a176bf6
  [x: string]: any;

  private _cart:Cart= {items:[]};
  itemsQuantity = 0;

<<<<<<< HEAD
=======
  

>>>>>>> b5676b5c67b9e4c0e4c2d01490f0533b4a176bf6
  @Input()
  get cart():Cart{
    return this._cart;

  }
  set cart(cart:Cart){
    this._cart=cart;

    this.itemsQuantity= cart.items
    .map((item) =>item.quantity).reduce((prev,current) =>prev+current,0);
  }

<<<<<<< HEAD
  constructor(private cartService:CartService){
=======
  constructor(private cartService:CartService ,private router: Router){
>>>>>>> b5676b5c67b9e4c0e4c2d01490f0533b4a176bf6
  
  }
  getTotal(items:Array<CartItem>):number{
    return this.cartService.getTotal(items);
  
  }

  onClearCart():void{
    this.cartService.clearCart();
  }


<<<<<<< HEAD
=======
  onAccount(): void {
   this.router.navigateByUrl('/account');
  }


>>>>>>> b5676b5c67b9e4c0e4c2d01490f0533b4a176bf6
  onBecomeLeader():void{
    // Replace 'https://example.com' with the user leader website.
    const externalWebsiteUrl = 'https://example.com';

    // Use the router.navigate method to navigate to the external website.
    window.location.href = externalWebsiteUrl;
  }
}
