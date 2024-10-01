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
      image: 'assets/pokemon-1.png'
    },
    {
      name: 'Charmander',
      image: 'assets/pokemon-2.png'
    },
    {
      name: 'Blastoise',
      image: 'assets/pokemon-3.png'
    }
    ,
    {
      name: 'Butterfree ',
      image: 'assets/pokemon-4.png'
    }
    ,
    {
      name: 'Rattata',
      image: 'assets/pokemon-5.png'
    }
    ,
    {
      name: 'Weedle',
      image: 'assets/pokemon-6.png'
    }
    ,
    {
      name: 'Charmeleon',
      image: 'assets/pokemon-7.png'
    }
    ,
    {
      name: 'Charizard',
      image: 'assets/pokemon-8.png'
    }
    ,
    {
      name: 'Metapod',
      image: 'assets/pokemon-9.png'
    }
  ]

  async openDetails(pokemon: any) {
    await this.router.navigateByUrl('/details', {state: {pokemon}})
  }
}
