import { Component, OnInit, OnDestroy } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4themes_dark from '@amcharts/amcharts4/themes/dark';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

am4core.useTheme(am4themes_dark.default); // Usamos el tema oscuro

@Component({
  selector: 'app-grafica-ajax',
  templateUrl: './grafica-ajax.component.html',
  styleUrls: ['./grafica-ajax.component.css']
})
export class GraficaAjaxComponent implements OnInit, OnDestroy {
  private chart!: am4charts.XYChart;
  private apiUrl = 'http://localhost:3002/listAllSessions';
  private subscription!: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.createChart();
    this.subscription = interval(5000).subscribe(() => this.updateChart());
  }

  createChart() {
    let chart = am4core.create('chartdiv', am4charts.XYChart);
    chart.paddingRight = 20;

    // Eje X
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'status';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.labels.template.fontSize = 16;
    categoryAxis.renderer.labels.template.fill = am4core.color('#ffffff'); // Etiquetas blancas
    categoryAxis.renderer.grid.template.strokeOpacity = 0.3; // Cuadrícula con opacidad
    categoryAxis.renderer.grid.template.stroke = am4core.color('#ffffff'); // Color de la cuadrícula
    categoryAxis.renderer.minGridDistance = 30; // Distancia mínima entre las etiquetas

    // Eje Y
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.renderer.labels.template.fontSize = 16;
    valueAxis.renderer.labels.template.fill = am4core.color('#ffffff'); // Etiquetas blancas
    valueAxis.renderer.grid.template.strokeOpacity = 0.3; // Cuadrícula con opacidad
    valueAxis.renderer.grid.template.stroke = am4core.color('#ffffff'); // Color de la cuadrícula
    valueAxis.renderer.baseGrid.disabled = false; // Activar la cuadrícula base

    // Series de columnas
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'count';
    series.dataFields.categoryX = 'status';
    series.name = 'Sesiones';
    series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]';
    series.columns.template.fillOpacity = 0.8;
    series.columns.template.strokeWidth = 3; // Aumentamos el grosor del borde
    series.columns.template.strokeOpacity = 1;
    
    // Colores y bordes de las columnas
    series.columns.template.fill = am4core.color('#4caf50'); // Verde
    series.columns.template.stroke = am4core.color('#388e3c'); // Verde más oscuro

    // Añadir animación de aparición
    series.columns.template.events.on('inited', function(event) {
      event.target.animate(
        { property: 'opacity', to: 1 },
        1000
      );
    });

    this.chart = chart;
    this.updateChart();
  }

  updateChart() {
    this.http.get<{ sessions: any[] }>(this.apiUrl).subscribe(response => {
      let activeCount = response.sessions.filter(s => s.status === 'activa').length;
      let finishedCount = response.sessions.filter(s => s.status.includes('Finalizada')).length;

      this.chart.data = [
        { status: 'Activas', count: activeCount },
        { status: 'Finalizadas', count: finishedCount }
      ];
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
