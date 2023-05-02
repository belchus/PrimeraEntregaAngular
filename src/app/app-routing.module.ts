import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablasComponent } from './pages/tablas/tablas.component';
import { AbmAlumnosComponent } from './pages/tablas/abm-alumnos/abm-alumnos.component';
import { AlumboDetalleComponent } from './pages/tablas/alumbo-detalle/alumbo-detalle.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { CursosComponent } from './pages/cursos/cursos.component';

const routes:Routes =[
{
  path:'dashboard',
  component:DashboardComponent,
  children: [
    {
      path:'estudiantes',
      component:TablasComponent
    },
    {
      path:'cursos',
      component:CursosComponent
    },
    {
      path:'estudiantes/:id',
      component:AlumboDetalleComponent
    }
  ]
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
export { RouterModule };

