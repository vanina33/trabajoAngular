import { Component } from '@angular/core';
import { Productos } from './productos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarList= true;
  title = 'proyecto_angular';
  productos: Productos[] = [
    { nombre: 'Arina',         costos: '$200' },
    { nombre: 'Azucar',        costos: '$80' },
    { nombre: 'Yerba',         costos: '$800' },
    { nombre: 'Chocolatada',   costos: '$850' },
    { nombre: 'Maizena',       costos: '$300' }
  ];
}

