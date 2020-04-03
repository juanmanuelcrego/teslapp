import { Component, OnInit } from '@angular/core';
import { Datos } from '../datos/datos';
import { DATOSBAT } from '../datos/data-bat';
import { from } from 'rxjs';

@Component({
  selector: 'app-modbat',
  templateUrl: './modbat.component.html',
  styleUrls: ['./modbat.component.sass', '../../SASS/sass/materialize.css']
})
export class ModbatComponent implements OnInit {

  datosbat = DATOSBAT;

  bat: Datos = {
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
