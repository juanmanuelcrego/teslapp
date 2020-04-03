// se importa el objeto Datos del archivo datos.ts
import {Datos} from './datos';

// datos del módulo de corriente

// se exporta la variable DATOSCOR que contiene el objeto Datos que será utilizado desde otro componente
export const DATOSCOR: Datos[] = [
    {id: 1, nombre: 'Línea 1', voltaje: '', temperatura: '', intensidad: '10Kv'},
    {id: 3, nombre: 'Línea 3', voltaje: '', temperatura: '', intensidad: '30Kv'},
    {id: 2, nombre: 'Línea 2', voltaje: '', temperatura: '', intensidad: '6.2Kv'},
    {id: 4, nombre: 'Línea 4', voltaje: '', temperatura: '', intensidad: '5Kv'},
    {id: 5, nombre: 'Línea 5', voltaje: '', temperatura: '', intensidad: '20.5Kv'}    
];