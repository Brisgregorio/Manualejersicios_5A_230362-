import { Component } from '@angular/core';
import { SidebarService } from '../../shared/sidebar.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  imports:[CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  practicas = [
    { nombre: 'Práctica 1', link: '/practica1', ejercicio:'Anatomía de un componente.', objetivo:'Actualizar la plantilla y los estilos de un componente en Angular.', descripcion:'Se aprende a modificar la plantilla HTML y los estilos CSS de un componente en Angular, cambiando el mensaje mostrado y el color del texto.', unidad:'Unidad 2', mostrarDescripcion: false },
    { nombre: 'Práctica 2', link: '/practica2', ejercicio:'Actualización del componente.', objetivo:'Aprender a actualizar la clase de un componente y utilizar la interpolación en Angular.', descripcion:'En este ejercicio, se agrega una propiedad city a la clase de un componente y se utiliza la interpolación para mostrar su valor en la plantilla. También se practica la interpolación con expresiones, como {{ 1 + 1 }}.', unidad:'Unidad 2', mostrarDescripcion: false },
    { nombre: 'Práctica 3', link: '/practica3', ejercicio:'Composición de los componentes.', objetivo:'Aprender a componer y utilizar componentes dentro de otros componentes en Angular.', descripcion:'En este ejercicio, se aprende a usar el selector de un componente para referenciarlo dentro de otro, y se agrega un componente UserComponent en la plantilla de AppComponent. También se explora cómo agregar más marcado HTML y utilizar múltiples copias de un componente en la misma página.', unidad:'Unidad 2', mostrarDescripcion: false },
    { nombre: 'Práctica 4', link: '/practica4', ejercicio:'Flujo de control en componentes @if.', objetivo:'Aprender a usar condicionales en las plantillas de Angular para mostrar contenido de forma dinámica.', descripcion:'En este ejercicio, se utiliza la sintaxis de plantilla @if para mostrar contenido condicionalmente en una plantilla Angular. Se agrega una propiedad isServerRunning y se usa la sintaxis @if y @else para mostrar diferentes mensajes dependiendo del valor de esta propiedad.', unidad:'Unidad 2', mostrarDescripcion: false },
    { nombre: 'Práctica 5', link: '/practica5', ejercicio:'Flujo de control @for.', objetivo:'Aprender a usar la sintaxis @for para repetir elementos en una plantilla de Angular.', descripcion:'En este ejercicio, se utiliza la sintaxis @for para iterar sobre una lista de usuarios y mostrar sus nombres en elementos <p>. Se agrega la propiedad users a la clase y se usa track para identificar de manera única cada usuario.', unidad:'Unidad 2', mostrarDescripcion: false },
    { nombre: 'Práctica 6', link: '/practica6', ejercicio:'Enlace de propiedades.', objetivo:'Usar el enlace de propiedades en Angular para establecer valores dinámicos.', descripcion:'Se enlaza la propiedad isEditable a contentEditable de un <div>, haciendo que el div sea editable dependiendo del valor de la propiedad.', unidad:'Unidad 2', mostrarDescripcion: false },
    { nombre: 'Práctica 7', link: '/practica7', ejercicio:'Manejo de eventos', objetivo:'Aprender a agregar y manejar eventos en Angular.', descripcion:' En este ejercicio, se enlaza el evento mouseover de un <section> a la función onMouseOver(), que actualiza un mensaje cuando el evento ocurre.', unidad:'Unidad 2', mostrarDescripcion: false },
    { nombre: 'Práctica 8', link: '/practica8', ejercicio:'Comunicarse con @Input', objetivo:'Usar @Input para pasar datos entre componentes.', descripcion:'Se define una propiedad con @Input en el componente secundario y se pasa un valor desde el componente principal para mostrarlo en la plantilla del secundario.', unidad:'Unidad 2', mostrarDescripcion: false },
    { nombre: 'Práctica 9', link: '/practica9', ejercicio:'Comunicarse con @Output.', objetivo:' Usar @Output y EventEmitter para comunicar un componente hijo con el componente padre.', descripcion:'Se crea una propiedad con @Output en el hijo para emitir eventos, y el padre escucha esos eventos para manejar la comunicación.', unidad:'Unidad 2', mostrarDescripcion: false },
    { nombre: 'Práctica 10', link: '/practica10', ejercicio:'Vistas Diferibles en Angular', objetivo:'Cargar componentes de manera diferida para mejorar el rendimiento de la aplicación.', descripcion:'Las vistas diferibles permiten cargar componentes solo cuando son necesarios, usando el decorador @defer. Esto optimiza la carga inicial de la aplicación. Se puede agregar un marcador de posición con @placeholder, mostrar un mensaje de carga con @loading, y activar la carga solo cuando el componente entra en la vista del usuario con @defer (on viewport). Esta técnica reduce el tiempo de carga y mejora el rendimiento.', unidad:'Unidad 2', mostrarDescripcion: false },
    { nombre: 'Práctica 11', link: '/practica11', ejercicio:'Optimización de Imágenes en Angular.', objetivo:'Mejorar la carga eficiente de imágenes en Angular.', descripcion:'La directiva NgOptimizedImage optimiza las imágenes al usar ngSrc en lugar de src, y requiere los atributos width y height para evitar desplazamientos en el diseño. Permite priorizar imágenes con priority y usar cargadores de imágenes para URLs optimizadas.', unidad:'Unidad 2', mostrarDescripcion: false },
    { nombre: 'Práctica 12', link: '/practica12', ejercicio:'Habilitación del Enrutamiento', objetivo:'Configurar el enrutamiento en Angular para habilitar la navegación entre vistas.', descripcion:'El enrutamiento en Angular permite navegar entre distintas vistas. Se configura mediante un archivo de rutas (app.routes.ts), se registra en la aplicación (app.config.ts), y se utiliza <router-outlet /> en la plantilla para mostrar el contenido de las rutas seleccionadas.', unidad:'Unidad 2', mostrarDescripcion: false },
    
  ];
  tareas=[
    { nombre: 'Tabla basica', link: '/tabla-basic', ejercicio:'Tabla basica', objetivo:'Implementar una tabla simple con DataTables para visualizar datos estáticos en una estructura tabular.', descripcion:' Se crea una tabla HTML con DataTables para mejorar la presentación y organización de datos. No usa AJAX ni JSON, los datos están incrustados directamente en el HTML.', unidad:'Unidad 2', mostrarDescripcion: false }, 
    { nombre: 'Tabla options', link: '/tabla-options', ejercicio:'Tabla options', objetivo:'Configurar opciones avanzadas en DataTables, como paginación, búsqueda y ordenamiento.', descripcion:'Se configura DataTables utilizando el objeto options para personalizar la presentación y el comportamiento de la tabla, habilitando características como filtrado y ordenación de columnas.', unidad:'Unidad 2', mostrarDescripcion: false },
    { nombre: 'Tabla JSON', link: '/tabla-json', ejercicio:'Tabla JSON', objetivo:'Cargar datos en DataTables desde un archivo JSON externo.', descripcion:'Se usa la opción ajax de DataTables para obtener datos de un archivo JSON y mostrarlos dinámicamente en la tabla.', unidad:'Unidad 2', mostrarDescripcion: false },
    { nombre: 'Tabla AJAX', link: '/tabla-ajax', ejercicio:'Tabla AJAX', objetivo:'Integrar DataTables con una API mediante AJAX para obtener datos dinámicamente.', descripcion:'Se utiliza ajax para realizar una solicitud a un servidor que devuelve datos en formato JSON. Esto permite que la tabla se actualice sin recargar la página.', unidad:'Unidad 2', mostrarDescripcion: false },
    { nombre: 'Grafica basica', link: '/grafica-basic', ejercicio:'Grafica basica', objetivo:'Crear una gráfica simple con amCharts utilizando datos estáticos.', descripcion:'Se genera una gráfica de barras con datos definidos en el código, sin conexión a un JSON o API externa.', unidad:'Unidad 2', mostrarDescripcion: false },
    { nombre: 'Grafica options', link: '/grafica-options', ejercicio:'Grafica Options', objetivo:'Configurar opciones avanzadas en amCharts, como animaciones, colores y estilos personalizados.', descripcion:'Se utilizan opciones personalizadas para modificar la apariencia y el comportamiento de la gráfica, como cambio de colores, efectos de animación y formatos de etiquetas.', unidad:'Unidad 2', mostrarDescripcion: false },
    { nombre: 'Grafica JSON', link: '/grafica-json', ejercicio:'Grafica JSON', objetivo:'Cargar datos en una gráfica de amCharts desde un archivo JSON externo.', descripcion:'Se obtiene información desde un archivo JSON mediante fetch() y se usa para renderizar la gráfica dinámicamente.', unidad:'Unidad 2', mostrarDescripcion: false },
    { nombre: 'Grafica AJAX', link: '/grafica-ajax', ejercicio:'Grafica AJAX', objetivo:'Obtener datos en tiempo real desde una API para generar una gráfica interactiva.', descripcion:'Se utiliza fetch() o AJAX para consultar una API y actualizar la gráfica en tiempo real sin necesidad de recargar la página.', unidad:'Unidad 2', mostrarDescripcion: false },
  ]
  
  constructor(private sidebarService: SidebarService, private router: Router) {}
  


  mostrarSidebar(practica: any): void {
    this.sidebarService.setSidebarState(true, practica);
  }
  mostrarNavbar = true;
  navbarVisible: boolean = true; // Controla la visibilidad del navbar
  sidebarVisible: boolean = true; // Controla la visibilidad del sidebar
  page1Visible: boolean = true;  // Controla la visibilidad del page1

  // Función para manejar el cierre de sesión
  cerrarSesion() {
    // Ocultar el navbar, sidebar y page1
    this.navbarVisible = false;
    this.sidebarVisible = false;
    this.page1Visible = false;

    // Aquí puedes agregar lógica para cerrar la sesión (por ejemplo, redirigir a la página de login)
  }
}