import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  constructor(private router: Router, private empleadosService: EmpleadosService,private route:ActivatedRoute) { }

  empleados: Empleado[] = [];

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  indice:number = 0;

  ngOnInit(): void {
    this.indice= this.route.snapshot.params['id'];
    let empleado:Empleado = this.empleadosService.getEmpleadoById(this.indice);
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }
  volverHome() {
    this.router.navigate(['']);
  }
  editaEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadosService.editarEmpleado(this.indice,miEmpleado);
    this.volverHome();
  }
}
