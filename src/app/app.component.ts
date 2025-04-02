import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { PageContainerComponent } from './dashboard/page-container/page-container.component';

@Component({
  selector: 'app-root',
  imports:[PageContainerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      import('datatables.net').then(() => {
        // Código para inicializar DataTables
        ($ as any)('.row-border').DataTable();
      });
    }
  }
}