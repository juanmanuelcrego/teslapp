// se importa el objeto Datos del archivo datos.ts
import {Datos} from './datos';

// datos del módulo de baterías

// se exporta la variable DATOSBAT que contiene el objeto Datos que será utilizado desde otro componente
export const DATOSBAT: Datos[] = [
    {id: 1, nombre: 'bateria 1', voltaje: '12.2', temperatura: '30°', intensidad: ''},
    {id: 2, nombre: 'bateria 2', voltaje: '6.4', temperatura: '59°', intensidad: ''},
    {id: 3, nombre: 'bateria 3', voltaje: '9.1', temperatura: '67°', intensidad: ''},
    {id: 4, nombre: 'bateria 4', voltaje: '5.3', temperatura: '20°', intensidad: ''},
    {id: 5, nombre: 'bateria 5  ', voltaje: '7.6', temperatura: '50°', intensidad: ''}    
];