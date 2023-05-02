import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule,Routes } from '@angular/router';
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
  },
  {
    // AUTH MODULE estaba totalmente aislado de la app... por eso tiraba errores
    // con los componentes mat-icon, mat-label y demas... para limpiar esos errores
    // debes cargar el modulo en tu arbol de rutas mediante loadChildren o importar el
    // modulo en el array de imports de AppModule. Como estamos trabajando con lazyloading
    // es conveniente hacerlo aca...
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    // faltaba esta exportacion para proveer router-outlet al app.component
    RouterModule,
  ]
})
export class AppRoutingModule { }
// export { RouterModule }; esto aca no va

