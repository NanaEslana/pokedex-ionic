import {Component, signal} from '@angular/core';
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {CreateModalComponent} from "../components/create-modal/create-modal.component";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private readonly router: Router, private modalCtrl: ModalController) {
  }

  pokemons = signal<any[]>([
    {
      name: 'Bulbasaur',
      image: 'assets/pokemon-1.png',
      type: 'Erva e Veneno',
      description: 'Por algum tempo após o nascimento, ele usa os nutrientes contidos na semente em suas costas para crescer..',
      ability: ' O bulbo pode absorver a luz solar, permitindo Bulbasaur para restaurar a saúde com Síntese ou disparar um poderoso Raio Solar.',
      evolutions: {
        start: {
          image: 'assets/pokemon-1.png',
          name: 'Bulbasaur',
          description: 'Por algum tempo após o nascimento, ele usa os nutrientes contidos na semente em suas costas para crescer.'
        } ,
        second: {
          image:  'assets/evolucao/pokemon-1.2.png',
          name: 'Ivysaur',
          description: 'Quanto mais luz solar Ivysaur recebe, mais força brota dentro dele, permitindo que o broto em suas costas cresça mais.'
        },
        third: {
          image: 'assets/evolucao/pokemon-1.3.png',
          name: 'Venusaur',
          description: 'Enquanto se aquece no sol, ele pode converter a luz em energia. Como resultado, ele é mais potente no verão.'
        }
      }
    },
    {
      name: 'Charmander',
      image: 'assets/pokemon-2.png',
      type: 'Fogo',
      ability: 'Charmander pode produzir chamas dentro de si e projetá-las de sua boca, o que significa que ele pode respirar fogo.',
      description: 'A chama em sua cauda mostra a força de sua força vital. Se Charmander for fraco, a chama também queima fracamente.',
      evolutions: {
        start: {
          image: 'assets/pokemon-2.png',
          name: 'Charmander',
          description: 'A chama em sua cauda mostra a força de sua força vital. Se Charmander for fraco, a chama também queima fracamente.'
        } ,
        second: {
          image:  'assets/evolucao/pokemon-2.2.png',
          name: 'Charmeleon',
          description: 'Quando ele balança sua cauda em chamas, a temperatura ao redor dele sobe cada vez mais, atormentando seus oponentes.'
        },
        third: {
          image: 'assets/evolucao/pokemon-3.2.png',
          name: 'Charizard',
          description: 'Se Charizard ficar realmente irritado, a chama na ponta de sua cauda queima em um tom azul claro.'
        }
      }
    }
  ])

  async openDetails(pokemon: any) {
    await this.router.navigateByUrl('/details', {state: {pokemon}})
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: CreateModalComponent,
    });
    await modal.present();

    const {data, role} = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.pokemons.update(ps => [...ps, data]);
    }

  }
}
