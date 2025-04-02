import { Component, AfterViewInit } from '@angular/core';
import  $ from 'jquery';
import 'datatables.net-dt';
import { DataTablesModule } from "angular-datatables";

@Component({
  selector: 'app-tabla-basic',
  standalone: true,
  imports:[DataTablesModule],
  templateUrl: './tabla-basic.component.html',
  styleUrls: ['./tabla-basic.component.css']
})
export class TablaBasicComponent{
}
