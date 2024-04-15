import { Component } from '@angular/core';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent {
  collapsed: boolean = false;

  constructor() { }

  onToggleSideNav() {
    this.collapsed = !this.collapsed;
  }
}
