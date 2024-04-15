import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LeaderconfirmComponent } from './leaderconfirm/leaderconfirm.component';


@Component({
  selector: 'app-leader',
  templateUrl: "./leader.component.html",
  styles: [
  ]
})


export class LeaderComponent {
  constructor(private dialog: MatDialog, private router: Router) {}

  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(LeaderconfirmComponent, {
      width: '250px',
      data: 'Do you want to lead this group?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.router.navigate(['/promotions']);
      }
    });
}}

