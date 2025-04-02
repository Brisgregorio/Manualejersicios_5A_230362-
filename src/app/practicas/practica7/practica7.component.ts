import { Component } from '@angular/core';

@Component({
  selector: 'app-practica7',
  templateUrl: './practica7.component.html',
  styleUrls: ['./practica7.component.css']
})
export class Practica7Component {
  message = '';

  onMouseOver() {
    this.message = 'Los pulpos tienen tres corazones.';
  }

  onMouseLeave() {
    this.message = ''; // Resetea el mensaje cuando el mouse se va
  }

  greet() {
    console.log('Hola, cara de bola 👋');
  }
}
