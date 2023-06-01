import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-owner-dashboard',
  templateUrl: './property-owner-dashboard.component.html',
  styleUrls: ['./property-owner-dashboard.component.scss']
})
export class PropertyOwnerDashboardComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToPage(page: string) {
    this.router.navigate([page]);
  }
  

}
