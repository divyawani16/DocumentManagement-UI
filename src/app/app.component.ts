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
  currentLayout: string;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentLayout = event?.url?.split('/')[1];
      }
    });
  }

  ngOnInit() {
    console.log('AppComponent constructor');
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const layout = this.router.routerState.snapshot.root.firstChild?.data.layout;
        this.showHeader = layout !== 'login-layout';
        this.sideBarOpen = layout !== 'login-layout';
      }
    });
  }
  
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  isDefaultLayout(): boolean {
    return this.currentLayout === 'dashboard' || this.currentLayout === 'home' || this.currentLayout === 'users' || this.currentLayout === 'property' || this.currentLayout === 'document-details' || this.currentLayout === 'history';
  }

  isTenantLayout(): boolean {
    return this.currentLayout === 'tenant' || this.currentLayout === 'your-document' || this.currentLayout === 'your-property';
  }

  isOwnerLayout(): boolean {
    return this.currentLayout === 'owner' || this.currentLayout === 'owner-document' || this.currentLayout === 'owner-user' || this.currentLayout === 'owner-property';
  }
}