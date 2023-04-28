import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ControlErrorMessagesPipe } from 'src/app/shared/pipes/control-error-messages.pipe';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PipesModule,
    MatIconModule,
    MatButtonModule,
    ControlErrorMessagesPipe
  ]
})
export class LoginModule { }
