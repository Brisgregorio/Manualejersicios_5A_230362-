import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Router, NavigationEnd } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-grafica-json',
  standalone:true,
  imports: [HighchartsChartModule],
  templateUrl: './grafica-json.component.html',
  styleUrl: './grafica-json.component.css'
})
export class GraficaJsonComponent implements OnInit, OnDestroy {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  chartInstance!: Highcharts.Chart;
  private routerEventsSub!: Subscription;

  // Datos: Cantidad de café en tazas (lo que dicen vs. lo que toman)
  private chartData = [
    { category: 'Estudiante en finales', said: 2, real: 8 },
    { category: 'Programador', said: 3, real: 6 },
    { category: 'Maestro', said: 2, real: 5 },
    { category: 'Diseñador Gráfico', said: 2, real: 7 },
    { category: 'Persona promedio', said: 1, real: 2 }
  ];

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeChart();
    this.setupRouterListener();
  }

  ngOnDestroy(): void {
    this.cleanupResources();
  }

  private initializeChart(): void {
    this.createChartConfig(this.chartData);
  }

  private createChartConfig(data: any[]): void {
    this.chartOptions = {
      chart: {
        type: 'bar',
        backgroundColor: '#FDEDEC', // Fondo color café con leche
        borderRadius: 12,
        events: { load: () => this.triggerChartRedraw() }
      },
      title: {
        text: '☕ Café Necesario para Funcionar ☕',
        style: { color: '#6D4C41', fontSize: '20px', fontWeight: 'bold' }
      },
      xAxis: {
        categories: data.map(item => item.category),
        labels: { style: { fontSize: '14px', color: '#4E342E' } }
      },
      yAxis: {
        title: { text: 'Tazas de Café ☕', style: { color: '#4E342E' } },
        gridLineColor: '#D7CCC8'
      },
      legend: {
        align: 'right',
        verticalAlign: 'top',
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 8,
        shadow: true
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          groupPadding: 0.3,
          pointWidth: 30,
          dataLabels: { enabled: true, format: '{y}', style: { fontSize: '14px' } }
        }
      },
      series: [
        { type: 'bar', name: 'Lo que dicen 🍵', data: data.map(item => item.said), color: '#8D6E63' },
        { type: 'bar', name: 'Lo que realmente toman 🤯', data: data.map(item => item.real), color: '#4E342E' }
      ],
      credits: { enabled: false }
    };
    this.cdr.detectChanges();
  }

  private triggerChartRedraw(): void {
    if (this.chartInstance) {
      this.chartInstance.reflow();
      this.chartInstance.redraw();
    }
  }

  chartCallback: Highcharts.ChartCallbackFunction = (chart) => {
    this.chartInstance = chart;
  };

  private setupRouterListener(): void {
    this.routerEventsSub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.router.url.includes('grafica-cafe')) {
        this.ngZone.run(() => {
          this.reloadChart();
        });
      }
    });
  }

  private reloadChart(): void {
    if (this.chartInstance) {
      this.chartInstance.destroy();
      this.chartInstance = null as any;
    }
    this.initializeChart();
  }

  private cleanupResources(): void {
    if (this.chartInstance) {
      this.chartInstance.destroy();
      this.chartInstance = null as any;
    }
    if (this.routerEventsSub) {
      this.routerEventsSub.unsubscribe();
    }
  }
}
