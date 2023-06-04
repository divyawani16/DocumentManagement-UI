import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenant-dashboard',
  templateUrl: './tenant-dashboard.component.html',
  styleUrls: ['./tenant-dashboard.component.scss']
})
export class TenantDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  notificationCount = 0;
  showNotificationCard = false;

  toggleNotificationCard() {
    this.showNotificationCard = !this.showNotificationCard;
    if (this.showNotificationCard) {
      this.notificationCount = 0; // Reset the notification count upon opening the card
    }
  }
}
