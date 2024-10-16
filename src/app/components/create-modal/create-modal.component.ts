import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController} from "@ionic/angular";
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
    image: new FormControl('assets/pokemon-2.png', {
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

  constructor(private modalCtrl: ModalController, private alertController: AlertController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  async presentAlert() {
    if (this.form.valid) {
      const alert = await this.alertController.create({
        header: 'Sucesso!',
        subHeader: 'Pokémon Adicionado',
        message: 'O Pokémon foi adicionado e está na sua lista!',
        buttons: ['OK'],
      });
      await alert.present();
      return this.modalCtrl.dismiss(this.form.getRawValue(), 'confirm');
    } else {
      const alert = await this.alertController.create({
        header: 'Aviso!',
        subHeader: 'Campos obrigatórios',
        message: 'Por favor, preencha todos os campos obrigatórios para adicionar um novo Pokémon.',
        buttons: ['OK'],
      });
      await alert.present();
      this.form.markAllAsTouched();
      return false;
    }
  }
}
