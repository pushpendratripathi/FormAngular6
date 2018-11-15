import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LengthComponent } from './Length_time/length.component';
import { FormOneComponent } from './form-one/form-one.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormTwoComponent } from './form-two/form-two.component';
import { FormThreeComponent } from './form-three/form-three.component';
import { FormFourComponent } from './form-four/form-four.component';
@NgModule({
  declarations: [LengthComponent, FormOneComponent, FormTwoComponent, FormThreeComponent,FormFourComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[LengthComponent,FormOneComponent,FormTwoComponent,FormThreeComponent, FormFourComponent, ReactiveFormsModule]

})
export class WacapApplicationModule { }
