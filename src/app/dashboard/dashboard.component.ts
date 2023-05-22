
import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  propertyCount: number;
  userCount: number;
  documentCount: number;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getPropertyCount();
    this.getUserCount();
    this.getDocumentCount();
  }

  getPropertyCount() {
    this.dashboardService.getPropertyCount().subscribe(
      count => this.propertyCount = count,
      error => console.log(error)
    );
  }

  getUserCount() {
    this.dashboardService.getUserCount().subscribe(
      count => this.userCount = count,
      error => console.log(error)
    );
  }
  getDocumentCount() {
    this.dashboardService.getDocumentCount().subscribe(
      count => this.documentCount = count,
      error => console.log(error)
    );
  }
}
