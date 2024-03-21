import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-leaderconfirm',
  template: `
    <h2 mat-dialog-title>Confirmation</h2>
    <mat-dialog-content>{{ data }}</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="'yes'">Yes</button>
      <button mat-button [mat-dialog-close]="'no'">No</button>
    </mat-dialog-actions>
  `,
})
export class LeaderconfirmComponent {
  constructor(
    public dialogRef: MatDialogRef<LeaderconfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}
}
