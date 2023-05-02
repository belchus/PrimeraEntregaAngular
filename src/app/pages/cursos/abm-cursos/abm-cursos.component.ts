import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-abm-cursos',
  templateUrl: './abm-cursos.component.html',
  styleUrls: ['./abm-cursos.component.scss']
})
export class AbmCursosComponent {
  

    nombreControl = new FormControl('', [Validators.required]);
    vacantesControl = new FormControl('', [Validators.required]);
    profesorControl = new FormControl('', [Validators.required]);
  
  
    cursosForm = new FormGroup({
      nombre: this.nombreControl,
      vacantes: this.vacantesControl,
      profesor: this.profesorControl,
 
    });
  
    constructor(private dialogRef: MatDialogRef<AbmCursosComponent>) {}
  
  
   save(): void {
      if (this.cursosForm.valid) {
        this.dialogRef.close(this.cursosForm.value)
      } else {
        this.cursosForm.markAllAsTouched();
      }
    }
  }
