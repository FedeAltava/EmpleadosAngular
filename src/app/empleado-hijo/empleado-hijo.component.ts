import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Empleado } from '../empleado.model';
import { CaracteristicasEmpleadoComponent } from "../caracteristicas-empleado/caracteristicas-empleado.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleado-hijo',
  standalone: true,
  imports: [CaracteristicasEmpleadoComponent,CommonModule],
  templateUrl: './empleado-hijo.component.html',
  styleUrl: './empleado-hijo.component.css'
})
export class EmpleadoHijoComponent implements OnInit{

@Input() empleadoLista:Empleado;
@Input() indice:number;
@Output() borrar = new EventEmitter<number>();

arrayCaracteristicas =[""];

agregarCaracteristias(nuevaCaracteristica:string){
  this.arrayCaracteristicas.push(nuevaCaracteristica);
}

borrarEmpleado(){
  this.borrar.emit(this.indice);
}

ngOnInit(): void {
  
}
}
