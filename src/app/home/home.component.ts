import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoComponent } from '../empleado-hijo/empleado-hijo.component';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, EmpleadoHijoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  title = 'Listado de empleados';

  constructor(private empleadosService:EmpleadosService){

    
  }
 

  ngOnInit(): void {
    //this.empleados = this.empleadosService.empleados;
    this.empleadosService.obtenerEmpleados().subscribe(
       misEmpleados=>{
        console.log(misEmpleados);
        this.empleados = Object.values(misEmpleados);
        this.empleadosService.setEmpleados(this.empleados);
      });
  }

  empleados: Empleado[] = [];

}
