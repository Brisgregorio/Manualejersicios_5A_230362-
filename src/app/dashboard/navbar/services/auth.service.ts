import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = true; // Indica si el usuario está autenticado

  logout() {
    this.isLoggedIn = false; // Cambia el estado al cerrar sesión
  }
}
