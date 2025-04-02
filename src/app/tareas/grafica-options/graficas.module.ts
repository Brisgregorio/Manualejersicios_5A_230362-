import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular'; // Importa HighchartsChartModule

@NgModule({
  imports: [
    CommonModule,
    HighchartsChartModule, // Asegúrate de importar el módulo aquí
  ],
  exports: [
    HighchartsChartModule, // Si lo necesitas para otros módulos
  ]
})
export class GraficasModule { }
