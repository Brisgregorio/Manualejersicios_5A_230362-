import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-grafica-basic',
  imports: [],
  templateUrl: './grafica-basic.component.html',
  styleUrl: './grafica-basic.component.css'
})
export class GraficaBasicComponent implements AfterViewInit {
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef;

  readonly languages = [
    { name: 'JavaScript', usage: 65 },
    { name: 'Python', usage: 48 },
    { name: 'Java', usage: 35 },
    { name: 'C#', usage: 30 },
    { name: 'C++', usage: 25 },
    { name: 'TypeScript', usage: 20 },
    { name: 'PHP', usage: 18 },
    { name: 'Swift', usage: 12 },
    { name: 'Go', usage: 10 },
    { name: 'Kotlin', usage: 8 }
  ];

  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart() {
    const labels = this.languages.map(lang => lang.name);
    const usage = this.languages.map(lang => lang.usage);

    new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Popularidad (%)',
          data: usage,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 70 // Ajuste para que el gráfico sea más claro
          }
        }
      }
    });
  }
}
