import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateModalComponent} from "./create-modal/create-modal.component";
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [CreateModalComponent],
  exports: [CreateModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ]
})
export class ComponentsModule { }
