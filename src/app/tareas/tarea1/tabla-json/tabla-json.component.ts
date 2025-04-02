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
  // Define el array de gatos
  cats = [
    {
      common_name: "Persian",
      scientific_name: "Persia",
      average_age: 12,
      is_domesticable: true,
      image_url: "assets/image.png"
    },
    {
      common_name: "Maine Coon",
      scientific_name: "Maine Coon",
      average_age: 15,
      is_domesticable: true,
      image_url: "assets/image2.png"
    },
    {
      common_name: "Siamese",
      scientific_name: "Siamensis",
      average_age: 14,
      is_domesticable: true,
      image_url: "assets/image3.png"
    },
    {
      common_name: "Bengal",
      scientific_name: "Felis bengalensis",
      average_age: 13,
      is_domesticable: true,
      image_url: "assets/image4.png"
    },
    {
      common_name: "Sphynx",
      scientific_name: "Sphynx",
      average_age: 10,
      is_domesticable: true,
      image_url: "assets/image5.png"
    },
    {
      common_name: "British Shorthair",
      scientific_name: "Felis catus",
      average_age: 15,
      is_domesticable: true,
      image_url: "assets/image6.png"
    },
    {
      common_name: "Ragdoll",
      scientific_name: "Felis catus",
      average_age: 12,
      is_domesticable: true,
      image_url: "assets/image7.png"
    },
    {
      common_name: "Abyssinian",
      scientific_name: "Felis catus",
      average_age: 14,
      is_domesticable: true,
      image_url: "assets/image8.png"
    },
    {
      common_name: "Scottish Fold",
      scientific_name: "Felis catus",
      average_age: 11,
      is_domesticable: true,
      image_url: "assets/image9.png"
    },
    {
      common_name: "American Shorthair",
      scientific_name: "Felis catus",
      average_age: 16,
      is_domesticable: true,
      image_url: "assets/image.png"
    },
    {
      common_name: "Russian Blue",
      scientific_name: "Felis catus",
      average_age: 15,
      is_domesticable: true,
      image_url: "assets/image9.png"
    },
    {
      common_name: "Oriental",
      scientific_name: "Felis catus",
      average_age: 13,
      is_domesticable: true,
      image_url: "assets/image8.png"
    },
    {
      common_name: "Turkish Van",
      scientific_name: "Felis catus",
      average_age: 12,
      is_domesticable: true,
      image_url: "assets/image7.png"
    },
    {
      common_name: "Exotic Shorthair",
      scientific_name: "Felis catus",
      average_age: 14,
      is_domesticable: true,
      image_url: "assets/image6.png"
    },
    {
      common_name: "Himalayan",
      scientific_name: "Felis catus",
      average_age: 15,
      is_domesticable: true,
      image_url: "assets/image5.png"
    },
    {
      common_name: "Norwegian Forest",
      scientific_name: "Felis catus",
      average_age: 13,
      is_domesticable: true,
      image_url: "assets/image4.png"
    },
    {
      common_name: "Singapura",
      scientific_name: "Felis catus",
      average_age: 11,
      is_domesticable: true,
      image_url: "assets/image3.png"
    },
    {
      common_name: "Munchkin",
      scientific_name: "Felis catus",
      average_age: 12,
      is_domesticable: true,
      image_url: "assets/image2.png"
    },
    {
      common_name: "Manx",
      scientific_name: "Felis catus",
      average_age: 14,
      is_domesticable: true,
      image_url: "assets/image.png"
    },
    {
      common_name: "Tonkinese",
      scientific_name: "Felis catus",
      average_age: 13,
      is_domesticable: true,
      image_url: "assets/image.png"
    },
    {
      common_name: "Savannah",
      scientific_name: "Felis catus",
      average_age: 20,
      is_domesticable: true,
      image_url: "assets/image9.png"
    },
    {
      common_name: "Balinese",
      scientific_name: "Felis catus",
      average_age: 15,
      is_domesticable: true,
      image_url: "assets/image8.png"
    },
    {
      common_name: "Egyptian Mau",
      scientific_name: "Felis catus",
      average_age: 13,
      is_domesticable: true,
      image_url: "assets/image7.png"
    },
    {
      common_name: "Birman",
      scientific_name: "Felis catus",
      average_age: 14,
      is_domesticable: true,
      image_url: "assets/image6.png"
    },
    {
      common_name: "LaPerm",
      scientific_name: "Felis catus",
      average_age: 12,
      is_domesticable: true,
      image_url: "assets/image5.png"
    },
    {
      common_name: "Korat",
      scientific_name: "Felis catus",
      average_age: 14,
      is_domesticable: true,
      image_url: "assets/image4.png"
    },
    {
      common_name: "Selkirk Rex",
      scientific_name: "Felis catus",
      average_age: 13,
      is_domesticable: true,
      image_url: "assets/image3.png"
    },
    {
      common_name: "Peterbald",
      scientific_name: "Felis catus",
      average_age: 14,
      is_domesticable: true,
      image_url: "assets/image2.png"
    },
    {
      common_name: "Chausie",
      scientific_name: "Felis catus",
      average_age: 15,
      is_domesticable: true,
      image_url: "assets/image.png"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.initializeDataTable();
  }

  initializeDataTable(): void {
    $(document).ready(() => {
      $('#catsTable').DataTable({
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
