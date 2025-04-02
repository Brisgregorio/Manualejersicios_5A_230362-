import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var $: any;  // Para usar jQuery/DataTables

@Component({
  selector: 'app-tabla-json',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-json.component.html',
  styleUrls: ['./tabla-json.component.css']
})
export class TablaJsonComponent implements OnInit {
  // Define el array de árboles
  trees = [
    {
      common_name: "Oak",
      scientific_name: "Quercus robur",
      average_height: 25,
      native_region: "Northern Hemisphere",
      image_url: "assets/oak.png"
    },
    {
      common_name: "Pine",
      scientific_name: "Pinus sylvestris",
      average_height: 30,
      native_region: "Northern Hemisphere",
      image_url: "assets/pine.png"
    },
    {
      common_name: "Maple",
      scientific_name: "Acer saccharum",
      average_height: 15,
      native_region: "North America",
      image_url: "assets/maple.png"
    },
    {
      common_name: "Birch",
      scientific_name: "Betula pendula",
      average_height: 20,
      native_region: "Europe and Asia",
      image_url: "assets/birch.png"
    },
    {
      common_name: "Redwood",
      scientific_name: "Sequoia sempervirens",
      average_height: 115,
      native_region: "California, USA",
      image_url: "assets/redwood.png"
    },
    {
      common_name: "Baobab",
      scientific_name: "Adansonia digitata",
      average_height: 30,
      native_region: "Africa",
      image_url: "assets/baobab.png"
    },
    {
      common_name: "Cherry",
      scientific_name: "Prunus avium",
      average_height: 10,
      native_region: "Europe and Asia",
      image_url: "assets/cherry.png"
    },
    {
      common_name: "Cedar",
      scientific_name: "Cedrus libani",
      average_height: 30,
      native_region: "Mediterranean region",
      image_url: "assets/cedar.png"
    },
    {
      common_name: "Willow",
      scientific_name: "Salix alba",
      average_height: 20,
      native_region: "Northern Hemisphere",
      image_url: "assets/willow.png"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.initializeDataTable();
  }

  initializeDataTable(): void {
    $(document).ready(() => {
      $('#treesTable').DataTable({
        paging: true,
        pageLength: 5,
        lengthMenu: [3, 5, 10],
        order: [[0, 'asc']],
        responsive: true,
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
