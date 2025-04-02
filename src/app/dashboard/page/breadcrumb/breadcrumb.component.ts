
import { Router, NavigationEnd, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']

})
export class BreadcrumbComponent {
  breadcrumbs: { label: string; url: string }[] = [];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateBreadcrumb(event.urlAfterRedirects);
      }
    });
  }

  updateBreadcrumb(url: string) {
    // Eliminar la barra inicial (/) y separar los segmentos
    const segments = url.split('/').filter((segment) => segment);
    let currentPath = '';

    // Si estamos en el "Inicio", agregar "Inicio" como el primer breadcrumb
    if (url === '/' || segments[0] === '') {
      this.breadcrumbs = [{ label: 'Inicio', url: '/' }];
      return;
    }

    // Asegurarse de que siempre comience con "Inicio"
    if (this.breadcrumbs.length === 0) {
      this.breadcrumbs.push({ label: 'Inicio', url: '/' });
    }

    // Acumular los breadcrumbs correctamente
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = segment.charAt(0).toUpperCase() + segment.slice(1); // Capitalizar el segmento

      // No agregar un breadcrumb si ya existe
      if (!this.breadcrumbs.some(b => b.url === currentPath)) {
        this.breadcrumbs.push({ label, url: currentPath });
      }
    });
  }

  navigateTo(index: number) {
    const targetUrl = this.breadcrumbs[index].url;
    this.breadcrumbs = this.breadcrumbs.slice(0, index + 1); // Limitar a la ruta seleccionada
    this.router.navigateByUrl(targetUrl);
  }
}

