import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss'],
})
export class CreateModalComponent {

  form = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    type: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    image: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    ability: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    description: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    })
  })

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.form.getRawValue(), 'confirm');
  }
}
