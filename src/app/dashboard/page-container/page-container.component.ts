import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ContentComponent } from '../page/content/content.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgClass } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-page-container',
  imports: [SidebarComponent, ContentComponent, NavbarComponent, NgClass],

  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css'
})
export class PageContainerComponent {
  isSidebarVisible = false;
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
  mostrarNavbar: boolean = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.mostrarNavbar = event.url !== '/login'; // Oculta el navbar en /login
      });
  }
}
