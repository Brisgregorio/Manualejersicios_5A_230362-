import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {NavbarComponent} from './components/navbar/navbar.component';

/*import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';*/

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Manualejersicios_5A_230362';
}
