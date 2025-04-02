import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tarea1',
  imports:[CommonModule,RouterModule],
  templateUrl: './tarea1.component.html',
  styleUrls: ['./tarea1.component.css']
})
export class Tarea1Component {
  tarjetas = [
    { titulo: 'Tabla Basic', descripcion: 'Explora esta tabla basica.', ruta: '/tabla-basic' },
    { titulo: 'Tabla Options', descripcion: 'Explora las razas de gatos que hay en esta tabla', ruta: '/tabla-options' },
    { titulo: 'Tabla AJAX', descripcion: 'Descripción breve de la tarea Tabla AJAX.', ruta: '/tabla-ajax' },
    { titulo: 'Tabla JSON', descripcion: 'Descripción breve de la tarea Tabla JSON.', ruta: '/tabla-json' }
  ];
  dropdownVisible = false;

toggleDropdown() {
  this.dropdownVisible = !this.dropdownVisible;
}

}
