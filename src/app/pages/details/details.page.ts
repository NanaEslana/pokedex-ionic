import {Component, OnInit, signal} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  pokemon = signal<any|undefined>(undefined)

  constructor(private readonly router: Router) { }

  ngOnInit() {
    const currentNavigation = this.router.getCurrentNavigation();

    if (currentNavigation && currentNavigation.extras.state) {
      this.pokemon.set(currentNavigation.extras.state['pokemon'])
    }
  }

}
