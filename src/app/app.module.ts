import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { PipesModule } from './shared/pipes/pipes.module';
import { AbmCursosComponent } from './pages/cursos/abm-cursos/abm-cursos.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { CursosModule } from './pages/cursos/cursos.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    NgbModule,
    AppRoutingModule,
    PipesModule,    
    CursosModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
