import { Component } from '@angular/core';

@Component({
  selector: 'app-practica7',
  templateUrl: './practica7.component.html',
  styleUrls: ['./practica7.component.css']
})
export class Practica7Component {
  message = '';

  onMouseOver() {
    this.message = 'Me llamo Brisa';
  }

  onMouseLeave() {
    this.message = ''; 
  }

  greet() {
    console.log('Hola, me gusta Angular');
  }
}
