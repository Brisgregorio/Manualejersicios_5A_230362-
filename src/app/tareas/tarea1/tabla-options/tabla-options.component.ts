import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-responsive';
import 'datatables.net-dt';

@Component({
  selector: 'app-tabla-options',
  templateUrl: './tabla-options.component.html',
  styleUrls: ['./tabla-options.component.css']
})
export class TablaOptionsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.initializeDataTable();
  }

  initializeDataTable(): void {
    const tableElement = '#gatosTable';

    // Usar el evento 'destroy' de DataTables antes de inicializar
    $(document).ready(() => {
      // Verificar si la tabla ya está inicializada para evitar duplicación de cabeceras
      if ($.fn.dataTable.isDataTable(tableElement)) {
        $(tableElement).DataTable().clear().destroy(); // Destruir correctamente la tabla existente
      }

      // Inicializar DataTable
      $(tableElement).DataTable({
        paging: true,
        pageLength: 5,
        lengthMenu: [3, 5, 10],
        order: [[0, 'asc']],
        responsive: true,
        scrollX: true,
        scrollY: '300px',
        language: {
          search: "Buscar:",
          lengthMenu: "Mostrar _MENU_ registros por página",
          info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
          paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior"
          }
        }
      });
    });
  }
}
