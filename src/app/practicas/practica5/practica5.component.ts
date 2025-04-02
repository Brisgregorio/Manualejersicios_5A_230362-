import { Component } from '@angular/core';

@Component({
  selector: 'app-practica5',
  imports: [],
  templateUrl: './practica5.component.html',
  styleUrl: './practica5.component.css'
})
export class Practica5Component {
  operatingSystems = [{id: 'linux', name: 'Linux'}, {id: 'osx', name: 'MacOS'}, {id: 'windows', name: 'Windows'}];
 users = [{id: 0, name: 'Al'}, {id: 1, name: 'Angel'}, {id: 2, name: 'Ppyo'}, {id: 3, name: 'Victoria'}, {id: 4, name: 'brisa'}];
}
