import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin-panel-layout';
  sideBarOpen = true;
  showHeader = true;
currentRoute: any;
  
  constructor(private router: Router, private route: ActivatedRoute) { }
   ngOnInit() {
    
  console.log('AppComponent constructor');
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const layout = this.route.root.firstChild.snapshot.data.layout;
        this.showHeader = layout !== 'login-layout';
        this.sideBarOpen = layout !== 'login-layout';
      }
    });
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  isTenantDashboardRoute(): boolean {
    const routePath = this.router.url.split('/')[1];
    const isTenantDashboard = routePath === 'tenant';
    return isTenantDashboard;
  }

  isOwnerDashboardRoute(): boolean {
    const routePath = this.router.url.split('/')[1];
    const isOwnerDashboard = routePath === 'owner';
    return isOwnerDashboard;
  }
}
