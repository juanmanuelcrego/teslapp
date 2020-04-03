import { Component, OnInit } from '@angular/core';
import { Datos } from '../datos/datos';
import { DATOSBAT } from '../datos/data-bat';
import { DATOSCOR } from '../datos/data-cor';


@Component({
  selector: 'app-circuito',
  templateUrl: './circuito.component.html',
  styleUrls: ['./circuito.component.sass', '../../SASS/sass/materialize.css']
})
export class CircuitoComponent implements OnInit {
  datosbat = DATOSBAT;
  datoscor = DATOSCOR;

  bat: Datos = {
    id: 0,
    nombre: '',
    voltaje: '',
    temperatura: '',
    intensidad: ''
  }

  cor: Datos = {
    id: 0,
    nombre: '',
    voltaje: '',
    temperatura: '',
    intensidad: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
