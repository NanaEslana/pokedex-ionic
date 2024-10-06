import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private readonly router: Router) {}

  pokemons = [
    {
      name: 'Bulbasaur',
      image: 'assets/pokemon-1.png',
      type: 'Erva e Veneno',
      description: 'Por algum tempo após o nascimento, ele usa os nutrientes contidos na semente em suas costas para crescer..'
    },
    {
      name: 'Charmander',
      image: 'assets/pokemon-2.png',
      type:  'Fogo',
      description: 'A chama em sua cauda mostra a força de sua força vital. Se Charmander for fraco, a chama também queima fracamente.'
    },
    {
      name: 'Blastoise',
      type: 'Água',
      image: 'assets/pokemon-3.png',
      description: 'Ele aumenta deliberadamente o peso do seu corpo para poder suportar o recuo dos jatos de água que dispara.'
    }
    ,
    {
      name: 'Butterfree ',
      image: 'assets/pokemon-4.png',
      type: 'Eva',
      description: 'Ela adora o néctar das flores e consegue localizar manchas de flores que tenham até mesmo pequenas quantidades de pólen.'
    }
    ,
    {
      name: 'Rattata',
      image: 'assets/pokemon-5.png',
      type: 'Normal',
      description: 'Mastigará qualquer coisa com suas presas. Se você vir um, pode ter certeza de que mais 40 vivem na área.'
    }
    ,
    {
      name: 'Weedle',
      type: 'Veneno',
      image: 'assets/pokemon-6.png',
      description: 'Cuidado com o ferrão afiado em sua cabeça. Ele se esconde na grama e arbustos onde come folhas.'
    }
    ,
    {
      name: 'Charmeleon',
      type: 'Fogo',
      image: 'assets/pokemon-7.png',
      description: 'Quando ele balança sua cauda em chamas, a temperatura ao redor dele sobe cada vez mais, atormentando seus oponentes.'
    }
    ,
    {
      name: 'Charizard',
      image: 'assets/pokemon-8.png',
      type: 'Fogo',
      description: 'Se Charizard ficar realmente irritado, a chama na ponta de sua cauda queima em um tom azul claro.'
    }
    ,
    {
      name: 'Metapod',
      image: 'assets/pokemon-9.png',
      type: 'Eva',
      description: 'Ele está esperando o momento de evoluir. Nesse estágio, ele só pode endurecer, então ele permanece imóvel para evitar ataques.'
    }
  ]

  async openDetails(pokemon: any) {
    await this.router.navigateByUrl('/details', {state: {pokemon}})
  }
}
