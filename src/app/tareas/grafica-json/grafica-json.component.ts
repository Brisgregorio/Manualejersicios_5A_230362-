import { Component, OnInit, OnDestroy, ChangeDetectorRef, NgZone } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Router, NavigationEnd } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-grafica-json',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './grafica-json.component.html',
  styleUrls: ['./grafica-json.component.css']
})
export class GraficaJsonComponent implements OnInit, OnDestroy {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  chartInstance!: Highcharts.Chart;
  private routerEventsSub!: Subscription;

  // Datos: Consumo de energía de diferentes dispositivos eléctricos (en kWh)
  private chartData = [
    { category: 'Aire Acondicionado', consumption: 120 },
    { category: 'Refrigerador', consumption: 80 },
    { category: 'Iluminación', consumption: 50 },
    { category: 'Computadora', consumption: 60 },
    { category: 'Televisor', consumption: 30 },
    { category: 'Lavadora', consumption: 40 },
    { category: 'Microondas', consumption: 20 }
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
        type: 'column',
        backgroundColor: '#E3F2FD', // Fondo azul suave
        borderRadius: 12,
        events: { load: () => this.triggerChartRedraw() }
      },
      title: {
        text: 'Consumo de Energía de Dispositivos Eléctricos',
        style: { color: '#1E88E5', fontSize: '22px', fontWeight: 'bold' }
      },
      xAxis: {
        categories: data.map(item => item.category),
        labels: { style: { fontSize: '14px', color: '#1976D2' } }
      },
      yAxis: {
        title: { text: 'Consumo (kWh)', style: { color: '#1976D2' } },
        gridLineColor: '#BBDEFB'
      },
      legend: {
        align: 'right',
        verticalAlign: 'top',
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 8,
        shadow: true
      },
      plotOptions: {
        column: {
          borderRadius: 8,
          groupPadding: 0.3,
          pointWidth: 30,
          dataLabels: { enabled: true, format: '{y} kWh', style: { fontSize: '14px' } }
        }
      },
      series: [
        {
          type: 'column',
          name: 'Consumo de Energía',
          data: data.map(item => item.consumption),
          color: '#1976D2'
        }
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
      if (this.router.url.includes('grafica-energia')) {
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
