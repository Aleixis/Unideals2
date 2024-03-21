import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl:'product-box.component.html'
})
export class ProductBoxComponent {
  @Input() fullWidthMode =false;
  @Input() product:Product |undefined;


  @Output() addToCart =new EventEmitter();

  onAddToCart():void{
    this.addToCart.emit(this.product);


  }


  onBecomeLeader():void{
    // Replace 'https://example.com' with the user leader website.
    const externalWebsiteUrl = 'https://example.com';

    // Use the router.navigate method to navigate to the external website.
    window.location.href = externalWebsiteUrl;
  }
}
