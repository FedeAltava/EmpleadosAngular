import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Empleado } from './empleado.model';
import { EmpleadoHijoComponent } from "./empleado-hijo/empleado-hijo.component";
import { EmpleadosService } from './empleados.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, EmpleadoHijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Listado de empleados';

  constructor(private empleadosService:EmpleadosService){

    //this.empleados = this.empleadosService.empleados;
  }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  empleados: Empleado[] = [];

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadosService.agregarEmpleadoService(miEmpleado);
  }

}
