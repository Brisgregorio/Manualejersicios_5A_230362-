import { Component, OnInit, OnDestroy } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

am4core.useTheme(am4themes_animated.default);

@Component({
  selector: 'app-grafica-ajax',
  imports: [],
  templateUrl: './grafica-ajax.component.html',
  styleUrl: './grafica-ajax.component.css'
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

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'status';
    categoryAxis.renderer.grid.template.location = 0;
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'count';
    series.dataFields.categoryX = 'status';
    series.name = 'Sesiones';
    series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]';
    series.columns.template.fillOpacity = 0.8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

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