import { Component } from '@angular/core';

interface SideNavToggle{
  screenWidth: number;
  collapsed:boolean;

}

@Component({
  selector: 'app-checkout',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  isSideNavCollapsed = false;
  screenWidth =0;
  
  onToggleSideNav(data:SideNavToggle):void{
  this.screenWidth=data.screenWidth;
  this.isSideNavCollapsed=data.collapsed;
}
}