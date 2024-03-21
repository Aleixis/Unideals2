import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl:'./settings.component.html',
  styles: ``
})
export class SettingsComponent {
  collapsed: boolean = false;

  constructor() { }

  onToggleSideNav() {
    this.collapsed = !this.collapsed;
  }
}
