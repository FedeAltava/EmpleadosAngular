import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Empleado } from '../empleado.model';
import { CaracteristicasEmpleadoComponent } from "../caracteristicas-empleado/caracteristicas-empleado.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';


@Component({
  selector: 'app-empleado-hijo',
  standalone: true,
  imports: [CaracteristicasEmpleadoComponent,CommonModule],
  templateUrl: './empleado-hijo.component.html',
  styleUrl: './empleado-hijo.component.css'
})
export class EmpleadoHijoComponent implements OnInit{
constructor(private router:Router,private empleadoService:EmpleadosService){}
@Input() empleadoLista:Empleado;
@Input() indice:number;
@Output() borrar = new EventEmitter<number>();

arrayCaracteristicas =[""];

agregarCaracteristias(nuevaCaracteristica:string){
  this.arrayCaracteristicas.push(nuevaCaracteristica);
}
borraEmpleado(indice:number){
  this.empleadoService.borrarEmpleado(indice);
}
goToEditById(indice:number){
  this.router.navigate(['editar',indice])
}
ngOnInit(): void {
  
}
}
