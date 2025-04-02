import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../shared/sidebar.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  sidebarVisible = true;
  practicaSeleccionada: any = null;

  mensajes: string[] = [];


  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
 
    // Suscripción para visibilidad del sidebar
    this.sidebarService.sidebarVisible$.subscribe((visible) => {
      this.sidebarVisible = visible;
    });
  
    // Suscripción para práctica seleccionada
    this.sidebarService.selectedPractice$.subscribe((practice) => {
      this.practicaSeleccionada = practice;
    });
  }
  

  // Método para manejar selección de unidad
  seleccionarUnidad(unidadId: number): void {
    console.log('Unidad seleccionada:', unidadId);
    // Aquí puedes manejar la lógica adicional si es necesario
  }
  

}
