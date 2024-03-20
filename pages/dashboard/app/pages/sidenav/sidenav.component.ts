import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { navbarData } from './nav-data';
import { window } from 'rxjs';
import { animate, animation, keyframes, style, transition, trigger } from '@angular/animations';

interface SideNavToggle{
  screenWidth: number;
  collapsed:boolean;

}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut',[
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
        style({opacity:1})
        )
      ]),
      transition(':leave', [
        style({opacity: 0}),
        animate('350ms',
        style({opacity:0})
        )
      ])
    ]),
    trigger('rotate',[
      transition(':enter', [
        animate('1000ms',keyframes([
          style({transform:'rotate(0deg)',offset:'0'}),
          style({transform:'rotate(2turn)',offset:'1'})
        ])
        )
    ])
  ])
]
})
export class SidenavComponent implements  OnInit{

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
collapsed=false;
screenWidth= 0;
navData=navbarData;

 constructor() { }

  toggle() {
    this.onToggleSideNav.emit();
  }

@HostListener('window:resize',['$event'])
onResize(event: any){
  this.screenWidth = (window as any).innerWidth;
  if(this.screenWidth <= 768){
    this.collapsed=false;
    this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});

  }
}

ngOnInit(): void {
  this.screenWidth = (window as any).innerWidth;
}

toggleCollapse():void{
  this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
  this.collapsed=!this.collapsed;
}
closeSidenav():void{
  this.collapsed=false;
  this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth});
}
}


