import { Component, Input, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() isTenantDashboard: boolean;
  @Input() isOwnerDashboard: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isDefaultNavigation(): boolean {
    
   return  !this.isTenantDashboard && !this.isOwnerDashboard;
     
    
  }

  isTenantDashboardNavigation(): boolean {
    !this.isOwnerDashboard;
    !this.isDefaultNavigation();
    return this.isTenantDashboard ;

  }

  isOwnerDashboardNavigation(): boolean {
    !this.isTenantDashboard;
    !this.isDefaultNavigation();
    return this.isOwnerDashboard;
  }
}
