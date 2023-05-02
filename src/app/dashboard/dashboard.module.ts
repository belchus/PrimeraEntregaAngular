import { Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TablasModule } from '../pages/tablas/tablas.module';
import { SharedModule } from '../shared/shared.module';
import { DirectivesModule } from '../shared/directives/directives.module';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { CursosComponent } from '../pages/cursos/cursos.component';
import { CursosModule } from '../pages/cursos/cursos.module';
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    TablasModule,
    DirectivesModule,
    RouterModule,
    MatListModule,
    CursosModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }