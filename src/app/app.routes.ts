import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesComponent } from './quienes/quienes.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'proyectos',component:ProyectosComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'quienes',component:QuienesComponent}
];
