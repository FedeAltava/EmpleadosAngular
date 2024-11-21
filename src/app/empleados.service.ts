import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

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

  getEmpleadoById(indice:number){
    let empleado:Empleado = this.empleados[indice];
    return empleado;
  }
  agregarEmpleadoService(empleado:Empleado){
    this.servVentanaEmergente.muestrameMensaje("Persona por agregar:"+"\n"+
      empleado.nombre+"con salario: "+empleado.salario);
    this.empleados.push(empleado);
  }

  editarEmpleado(indice:number,empleado:Empleado){
    let empleadoEditado = this.empleados[indice];
    empleadoEditado.nombre = empleado.nombre;
    empleadoEditado.apellido = empleado.apellido;
    empleadoEditado.cargo = empleado.cargo;
    empleadoEditado.salario = empleado.salario;

  }
  borrarEmpleado(indice:number){
    this.empleados.splice(indice,1);
  }
  constructor(private servVentanaEmergente:ServicioEmpleadosService) { }
}
