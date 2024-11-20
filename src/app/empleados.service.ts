import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  empleados: Empleado[] = [
    new Empleado("juan", "garcia", "presidente", 7500),
    new Empleado("Ramon", "Manolete", "Lipador", 500),
    new Empleado("Sebastian", "Nuñez", "Informatico", 1200),
    new Empleado("Maria", "Lopez", "SubDirectora", 1700),
    new Empleado("Sara", "Ruiz", "Ceo", 2500),
  ];

  agregarEmpleadoService(empleado:Empleado){

    this.empleados.push(empleado);
  }
  constructor() { }
}
