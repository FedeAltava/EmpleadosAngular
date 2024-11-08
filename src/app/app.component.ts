import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Empleado } from './empleado.model';
import { EmpleadoHijoComponent } from "./empleado-hijo/empleado-hijo.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, EmpleadoHijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Listado de empleados';
  empleados: Empleado[] = [
    new Empleado("juan", "garcia", "presidente", 7500),
    new Empleado("Ramon", "Manolete", "Lipador", 500),
    new Empleado("Sebastian", "Nuñez", "Informatico", 1200),
    new Empleado("Maria", "Lopez", "SubDirectora", 1700),
    new Empleado("Sara", "Ruiz", "Ceo", 2500),
  ];
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado)
  }
  borrarEmpleado(index: number) {
    if (index > -1) {
      this.empleados.splice(index, 1); // Elimina el empleado en el índice dado
    }
  }
}
