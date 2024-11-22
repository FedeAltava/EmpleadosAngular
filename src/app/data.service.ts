import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {}

  cargarEmpleados(){
   return this.httpClient.get('https://empleados-7760d-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
  }

  guardarEmpleados(empleados: Empleado[]) {
    this.httpClient.put(
      'https://empleados-7760d-default-rtdb.europe-west1.firebasedatabase.app/datos.json',
      empleados
    ).subscribe({
      next: (response) => console.log("Se han guardado los empleados: ",response),
      error: (error) => console.error("Error al guardar empleados: ", error)
    });
  }
  editarEmpleados(indice:number,empleado:Empleado){
    let url = 'https://empleados-7760d-default-rtdb.europe-west1.firebasedatabase.app/datos/'+ indice +'.json'
    this.httpClient.put(url,empleado).subscribe({
      next: (response) => console.log("Se han modificado correctamente el empleado: ",response),
      error: (error) => console.error("Error al guardar empleados: ", error)

    });
  }

  eliminarEmpleados(indice:number){
    let url = 'https://empleados-7760d-default-rtdb.europe-west1.firebasedatabase.app/datos/'+ indice +'.json'
    this.httpClient.delete(url).subscribe({
      next: (response) => console.log("Se ha eliminado correctamente el empleado: ",response),
      error: (error) => console.error("Error al guardar empleados: ", error)

    });
  }
}
