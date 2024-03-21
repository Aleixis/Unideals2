import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl:'./help.component.html',
  styles: ``
})
export class HelpComponent {
  collapsed: boolean = false;

  constructor() { }

  onToggleSideNav() {
    this.collapsed = !this.collapsed;
  }
}
