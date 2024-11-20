import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-caracteristicas-empleado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrl: './caracteristicas-empleado.component.css'
})
export class CaracteristicasEmpleadoComponent implements OnInit {
  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  constructor(){}
  
  agregaCaracteristicas(value: string) {
    this.caracteristicasEmpleado.emit(value);
  }

  ngOnInit(): void {

  }
}
