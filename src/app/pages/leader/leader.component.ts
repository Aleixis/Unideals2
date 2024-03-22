import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LeaderconfirmComponent } from './leaderconfirm/leaderconfirm.component';

=======
>>>>>>> b5676b5c67b9e4c0e4c2d01490f0533b4a176bf6

@Component({
  selector: 'app-leader',
  templateUrl: "./leader.component.html",
  styles: [
  ]
})
<<<<<<< HEAD


export class LeaderComponent {
  constructor(private dialog: MatDialog, private router: Router) {}

  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(LeaderconfirmComponent, {
      width: '250px',
      data: 'Do you want to join?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.router.navigate(['/leader']);
      }
    });
}}
=======
export class LeaderComponent {

}
>>>>>>> b5676b5c67b9e4c0e4c2d01490f0533b4a176bf6
