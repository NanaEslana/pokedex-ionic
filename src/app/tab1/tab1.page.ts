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

  message = 'This modal example uses the modalController to present and dismiss modals.';

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
      description: 'A chama em sua cauda mostra a força de sua força vital. Se Charmander for fraco, a chama também queima fracamente.'
    },
    {
      name: 'Blastoise',
      type: 'Água',
      image: 'assets/pokemon-3.png',
      ability: '',
      description: 'Ele aumenta deliberadamente o peso do seu corpo para poder suportar o recuo dos jatos de água que dispara.'
    },
    {
      name: 'Butterfree ',
      image: 'assets/pokemon-4.png',
      type: 'Eva',
      ability: 'As escalas impermeáveis nas asas de Butterfree são frouxamente ligado, e se a retalhos eles serão liberados para o ar.',
      description: 'Ela adora o néctar das flores e consegue localizar manchas de flores que tenham até mesmo pequenas quantidades de pólen.'
    },
    {
      name: 'Rattata',
      image: 'assets/pokemon-5.png',
      type: 'Normal',
      ability: 'Habilidade Run Away, que permite uma fuga segura de Pokémon selvagens',
      description: 'Mastigará qualquer coisa com suas presas. Se você vir um, pode ter certeza de que mais 40 vivem na área.'
    },
    {
      name: 'Weedle',
      type: 'Veneno',
      image: 'assets/pokemon-6.png',
      ability: 'A habilidade do Pokémon Weedle é Shield Dust, que protege o Pokémon dos efeitos adicionais de movimentos.',
      description: 'Cuidado com o ferrão afiado em sua cabeça. Ele se esconde na grama e arbustos onde come folhas.'
    },
    {
      name: 'Charmeleon',
      type: 'Fogo',
      image: 'assets/pokemon-7.png',
      ability: 'Quando o Charmeleon balança sua cauda, a temperatura ao redor aumenta, atormentando seus oponentes.',
      description: 'Quando ele balança sua cauda em chamas, a temperatura ao redor dele sobe cada vez mais, atormentando seus oponentes.'
    },
    {
      name: 'Charizard',
      image: 'assets/pokemon-8.png',
      type: 'Fogo',
      ability: 'Charizard pode usar uma variedade de movimentos do tipo fogo, como Explosão de Fogo. Seu fogo é tão quente que pode derreter rochas e causar incêndios florestais',
      description: 'Se Charizard ficar realmente irritado, a chama na ponta de sua cauda queima em um tom azul claro.'
    },
    {
      name: 'Metapod',
      image: 'assets/pokemon-9.png',
      type: 'Eva',
      ability: 'A habilidade do Metapod nas cartas de Pokémon Estampas Ilustradas é a de evoluir o Pokémon quando o jogador lança uma moeda e sai cara.',
      description: 'Ele está esperando o momento de evoluir. Nesse estágio, ele só pode endurecer, então ele permanece imóvel para evitar ataques.'
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
