import { Component } from '@angular/core';

@Component({
  selector: 'app-practica5',
  imports: [],
  templateUrl: './practica5.component.html',
  styleUrl: './practica5.component.css'
})
export class Practica5Component {
  operatingSystems = [{id: 'linux', name: 'Linux'}, {id: 'osx', name: 'MacOS'}, {id: 'windows', name: 'Windows'}];
 users = [{id: 0, name: 'Dani'}, {id: 1, name: 'Matias'}, {id: 2, name: 'Derek'}, {id: 3, name: 'Citlali'}, {id: 4, name: 'Brisa'}];
}
