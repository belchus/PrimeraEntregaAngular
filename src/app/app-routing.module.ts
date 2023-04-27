import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablasComponent } from './pages/tablas/tablas.component';
import { AbmAlumnosComponent } from './pages/tablas/abm-alumnos/abm-alumnos.component';
import { AlumboDetalleComponent } from './pages/tablas/alumbo-detalle/alumbo-detalle.component';

const routes:Routes =[
{
  path:'dashboard',
  component:DashboardComponent,
  children: [
    {
      path:'estudiantes',
      component:TablasComponent
    },{
      path:'cards',
      component:TablasComponent
    },
    {
      path:'formularios',
      component:AbmAlumnosComponent
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

