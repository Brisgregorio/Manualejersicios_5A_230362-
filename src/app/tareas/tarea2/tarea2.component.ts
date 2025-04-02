import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tarea2',
  imports: [RouterModule,CommonModule],
  templateUrl: './tarea2.component.html',
  styleUrl: './tarea2.component.css'
})
export class Tarea2Component {
  tarjetas = [
    { titulo: 'Gráfica Basic', descripcion: 'Explora esta gráfica basica.', ruta: '/grafica-basic' },
    { titulo: 'Gráfica Options', descripcion: 'Explora las razas de gatos que hay en esta tabla', ruta: '/grafica-options'},
    { titulo: 'Gráfica AJAX', descripcion: 'Descripción breve de la tarea Tabla AJAX.', ruta: '/grafica-ajax' },
    { titulo: 'Gráfica JSON', descripcion: 'Descripción breve de la tarea Tabla JSON.', ruta: '/grafica-json' }
  ];
  dropdownVisible = false;

toggleDropdown() {
  this.dropdownVisible = !this.dropdownVisible;
}

}
