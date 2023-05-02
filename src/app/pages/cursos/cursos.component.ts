import { Component } from '@angular/core';import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AbmCursosComponent } from './abm-cursos/abm-cursos.component';
export interface Curso {
  id: number;
  nombre: string;
  vacantes: number;
  profesor:string;
  fecha_inicio: Date;


}
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

    estudiantes: Curso[] = [
        {
          id: 1,
          nombre: 'Python',
          profesor: 'Manuel Rodriguez',
          vacantes:9,
          fecha_inicio: new Date(),
    
    
        },
        {
          id: 2,
          nombre: 'Base de Datos',
          profesor: 'Manuel Rodriguez',
          vacantes:20,
          fecha_inicio: new Date(),
          
        },
        {
        id: 3,
          nombre: 'Angular',
          profesor: 'Lucas Pilar',
          vacantes:5,
          fecha_inicio: new Date(),
     
        
        },
        {
          id: 4,
          nombre: 'Desarrollo web',
          profesor: 'Melisa Morales',
          vacantes:25,
          fecha_inicio: new Date(),
     
        
        },
        
      ];
      dataSource = new MatTableDataSource(this.estudiantes);
     displayedColumns: string[] = ['id', 'nombre','profesor', 'vacantes','fecha_inicio','delete','ver_detalle','edit'];
    
     aplicarFiltros(ev: Event): void {
      const inputValue = (ev.target as HTMLInputElement)?.value;
      this.dataSource.filter = inputValue?.trim()?.toLowerCase();
    }
    constructor(private matDialog: MatDialog,private router:Router,private activateRoute:ActivatedRoute) {}
    
    irAlDetalle(alumnoId:number):void{
      this.router.navigate(['dashboard','estudiantes',alumnoId],{relativeTo: this.activateRoute,queryParams:{
        page:1,
        limit:50,
      }})
    }
    abrirABMCursos(): void {
      const dialog = this.matDialog.open(AbmCursosComponent)
      dialog.afterClosed().subscribe((valor) => {
        if (valor) {
          this.dataSource.data = [
            ...this.dataSource.data,
            {
              ...valor,
              fecha_inicio: new Date(),
              id: this.dataSource.data.length + 1,
            }
          ];
        }
      })
    }
    delete(cursoAEliminar: Curso): void {
    
      this.dataSource.data = this.dataSource.data.filter(
    
       (cursoActual) => cursoActual.id !== cursoAEliminar.id,
    
      );
    
     }
     editarCurso(cursoParaEditar: Curso): void {
      const dialog = this.matDialog.open(AbmCursosComponent, {
        data: {
          cursoParaEditar
        }
      });
      dialog.afterClosed().subscribe((valorDelFormulario) => {
        if (valorDelFormulario) {
          this.dataSource.data = this.dataSource.data.map(
            (cursoActual) => cursoActual.id === cursoParaEditar.id
              ? ({ ...cursoActual, ...valorDelFormulario})
              : cursoActual,
          );
        }
      })
    }
    }
    
    
    

