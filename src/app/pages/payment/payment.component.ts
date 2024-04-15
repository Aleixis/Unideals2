import { Component } from "@angular/core";
import { CartService } from "src/app/services/cart.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"],
})
export class PaymentComponent {
  constructor(private CartService: CartService, private router: Router) {}

  onSubmit() {
    this.CartService.clearCart();
    this.router.navigate(["/orders"]);
  }
}
