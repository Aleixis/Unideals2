import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { MatDialog } from '@angular/material/dialog';
import { LeaderconfirmComponent } from '../leaderconfirm/leaderconfirm.component';

@Component({
  selector: 'app-leaderapply',
  templateUrl: 'leaderapply.component.html',
  styleUrls: ['./leaderapply.component.css']
})
export class LeaderapplyComponent {
  constructor(private router: Router) {}

  submitApplication() {
    alert('Apply successfully!');
    this.router.navigate(['/leader']);
  }

  
  
}
