import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-grafica-basic',
  templateUrl: './grafica-basic.component.html',
  styleUrls: ['./grafica-basic.component.css']
})
export class GraficaBasicComponent implements AfterViewInit {
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef;

  readonly fruits = [
    { name: 'Manzanas', quantity: 120 },
    { name: 'Bananas', quantity: 80 },
    { name: 'Uvas', quantity: 150 },
    { name: 'Naranjas', quantity: 100 },
    { name: 'Peras', quantity: 75 },
    { name: 'Fresas', quantity: 90 },
    { name: 'Kiwis', quantity: 50 }
  ];

  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart() {
    const labels = this.fruits.map(fruit => fruit.name);
    const quantities = this.fruits.map(fruit => fruit.quantity);

    new Chart(this.chartCanvas.nativeElement, {
      type: 'bar', // Usamos un gráfico de barras
      data: {
        labels: labels,
        datasets: [{
          label: 'Cantidad de frutas',
          data: quantities,
          backgroundColor: this.generateColors(quantities.length), // Colores personalizados
          borderColor: '#FFFFFF', // Bordes blancos
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false // Sin cuadrícula en el eje X
            }
          },
          y: {
            beginAtZero: true,
            max: 200, // Para que el gráfico tenga un límite claro
            grid: {
              color: '#cccccc' // Gris claro para las líneas de la cuadrícula
            },
            ticks: {
              font: {
                size: 14,
                family: 'Arial, sans-serif', 
                weight: 'bold'
              },
              color: '#333' // Etiquetas de eje Y de color oscuro
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 14,
                family: 'Arial, sans-serif',
                weight: 'bold'
              },
              color: '#333' // Leyenda de color oscuro
            }
          }
        },
        layout: {
          padding: {
            top: 10,
            left: 10,
            right: 10,
            bottom: 10
          }
        }
      }
    });
  }

  generateColors(count: number) {
    const colors = [];
    const baseColors = ['#FF6347', '#FFD700', '#8A2BE2', '#00FF7F', '#FF4500', '#DC143C', '#00BFFF'];

    for (let i = 0; i < count; i++) {
      colors.push(baseColors[i % baseColors.length]); // Usamos una paleta de colores vivos
    }
    return colors;
  }
}
