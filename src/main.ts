import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { DatatablesCustomModule } from './app/datatables.module';
import { AppComponent } from './app/app.component';
import { Page1Component } from './app/pages/page1/page1.component';
import { Practica1Component } from './app/practicas/practica1/practica1.component';
import { Practica2Component } from './app/practicas/practica2/practica2.component';
import { Practica3Component } from './app/practicas/practica3/practica3.component';
import { Practica4Component } from './app/practicas/practica4/practica4.component';
import { Practica5Component } from './app/practicas/practica5/practica5.component';
import { Practica6Component } from './app/practicas/practica6/practica6.component';
import { Practica7Component } from './app/practicas/practica7/practica7.component';
import { Practica8Component } from './app/practicas/practica8/practica8.component';
import { Practica9Component } from './app/practicas/practica9/practica9.component';
import { Practica10Component } from './app/practicas/practica10/practica10.component';
import { Practica11Component } from './app/practicas/practica11/practica11.component';
import { Practica12Component } from './app/practicas/practica12/practica12.component';
import { TablaOptionsComponent } from './app/tareas/tabla-options/tabla-options.component';
import { TablaAjaxComponent } from './app/tareas/tabla-ajax/tabla-ajax.component';
import { TablaBasicComponent } from './app/tareas/tabla-basic/tabla-basic.component';
import { TablaJsonComponent } from './app/tareas/tabla-json/tabla-json.component';
import { GraficaBasicComponent } from './app/tareas/grafica-basic/grafica-basic.component';
import { GraficaOptionsComponent } from './app/tareas/tarea2/grafica-options/grafica-options.component';
import { GraficaJsonComponent } from './app/tareas/grafica-json/grafica-json.component';
import { GraficaAjaxComponent } from './app/tareas/grafica-ajax/grafica-ajax.component';

const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'practica1', component: Practica1Component },
  { path: 'practica2', component: Practica2Component },
  { path: 'practica3', component: Practica3Component },
  { path: 'practica4', component: Practica4Component },
  { path: 'practica5', component: Practica5Component },
  { path: 'practica6', component: Practica6Component },
  { path: 'practica7', component: Practica7Component },
  { path: 'practica8', component: Practica8Component },
  { path: 'practica9', component: Practica9Component },
  { path: 'practica10', component: Practica10Component },
  { path: 'practica11', component: Practica11Component },
  { path: 'practica12', component: Practica12Component },
  { path: 'tabla-basic', component: TablaBasicComponent },
  { path: 'tabla-options', component: TablaOptionsComponent },
  { path: 'tabla-ajax', component: TablaAjaxComponent },
  { path: 'tabla-json', component: TablaJsonComponent },
  {path:'grafica-basic',component:GraficaBasicComponent},
  {path:'grafica-options',component:GraficaOptionsComponent},
  {path:'grafica-ajax',component:GraficaAjaxComponent},
  {path:'grafica-json',component:GraficaJsonComponent},
    { path: '**', redirectTo: 'page1' }, 
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(DatatablesCustomModule),
  ],
}).catch((err) => console.error(err));
