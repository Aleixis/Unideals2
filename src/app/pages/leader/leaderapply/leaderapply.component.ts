import { Component } from '@angular/core';
import { Router } from '@angular/router'; 


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
