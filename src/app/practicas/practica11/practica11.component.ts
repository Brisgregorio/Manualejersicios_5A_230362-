import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-practica11',
  imports: [NgOptimizedImage],
  templateUrl: './practica11.component.html',
  styleUrl: './practica11.component.css'
})
export class Practica11Component {

  logoUrl = '../assets/image.png';  
  logoAlt = 'Logo de angular';  
  username='Ktbrisa'

}
