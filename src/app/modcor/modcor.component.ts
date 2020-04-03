import { Component, OnInit } from '@angular/core';
import { Datos } from '../datos/datos';
import { DATOSCOR } from '../datos/data-cor';

@Component({
  selector: 'app-modcor',
  templateUrl: './modcor.component.html',
  styleUrls: ['./modcor.component.sass', '../../SASS/sass/materialize.css']
})
export class ModcorComponent implements OnInit {

  datoscor = DATOSCOR;

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
