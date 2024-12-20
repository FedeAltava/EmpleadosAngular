import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesComponent } from './quienes/quienes.component';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { EditarComponent } from './editar/editar.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'agregar',component:AgregarEmpleadoComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'quienes',component:QuienesComponent},
    {path:'editar/:id',component:EditarComponent},
    {path:'**',component:ErrorPersonalizadoComponent}
];
