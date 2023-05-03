import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablasComponent } from './pages/tablas/tablas.component';
import { AlumboDetalleComponent } from './pages/tablas/alumbo-detalle/alumbo-detalle.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CursoDetalleComponent } from './pages/cursos/curso-detalle/curso-detalle.component';

const routes:Routes =[
{
  path:'',
  component:DashboardComponent,
  children: [
    {
      path:'estudiantes',
      component:TablasComponent,
    },
      {
        path:'estudiantes/:id',
        component:AlumboDetalleComponent
      },
     
    {
      path:'cursos',
      component:CursosComponent,
    },
    {
      path:'cursos/:id',
      component:CursoDetalleComponent
    },
  ]
  
    },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },{
    path: 'logout',
   component:LoginComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  
    RouterModule,
  ]
})
export class AppRoutingModule { }
