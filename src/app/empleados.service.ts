import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  constructor(private servVentanaEmergente:ServicioEmpleadosService,private dataService:DataService) { }


  empleados:Empleado[]=[];

  setEmpleados(misEmpleados:Empleado[]){
    this.empleados = misEmpleados;
  }
  
  getEmpleadoById(indice:number){
    let empleado:Empleado = this.empleados[indice];
    return empleado;
  }
  obtenerEmpleados(){
    return this.dataService.cargarEmpleados();
  }

  agregarEmpleadoService(empleado: Empleado) {
    // Muestra el mensaje de confirmación
    this.servVentanaEmergente.muestrameMensaje(
      `Persona por agregar:\n${empleado.nombre} con salario: ${empleado.salario}`
    );
    // Sincroniza los empleados actuales antes de agregar uno nuevo
    this.obtenerEmpleados().subscribe({
      next: (empleadosCargados: any) => {
       
        if (empleadosCargados) {
          // Extraer empleados existentes
          this.empleados = Object.values(empleadosCargados);
        }
        // Agregar el nuevo empleado
        this.empleados.push(empleado);
        // Guardar los empleados actualizados
        this.dataService.guardarEmpleados(this.empleados);
        // Actualizar el estado local
        this.setEmpleados(this.empleados);
      },
      error: (error) => console.error("Error al cargar empleados: ", error),
    });
  }
  editarEmpleado(indice:number,empleado:Empleado){
    let empleadoEditado = this.empleados[indice];
    empleadoEditado.nombre = empleado.nombre;
    empleadoEditado.apellido = empleado.apellido;
    empleadoEditado.cargo = empleado.cargo;
    empleadoEditado.salario = empleado.salario;
    this.dataService.editarEmpleados(indice,empleado);
  }
  borrarEmpleado(indice:number){
    this.empleados.splice(indice,1);
    this.dataService.eliminarEmpleados(indice);
    this.dataService.guardarEmpleados(this.empleados);
    
  }
  
}
