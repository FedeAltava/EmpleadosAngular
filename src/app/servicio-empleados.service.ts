import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

  muestrameMensaje(mensaje:string){
    alert(mensaje);
  }
}
