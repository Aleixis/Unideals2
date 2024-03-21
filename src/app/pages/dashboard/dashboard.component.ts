import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: '/dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  collapsed: boolean = false;

  constructor() { }

  onToggleSideNav() {
    this.collapsed = !this.collapsed;
  }
}
