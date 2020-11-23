import { Component } from '@angular/core';
import { SwapiService } from '../swapi.service';

import { BizLogicService } from '../biz-logic.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  planets = [];

  constructor(private swapiSvc: SwapiService, private bizLogicSvc: BizLogicService) {
    this.swapiSvc
      .fetchPlanets()
      .subscribe(
        data => this.planets = [
          ...this.planets
          , ...data
        ].map(x =>({
          ...x
          , displayColor: this.bizLogicSvc.getDisplayColor(x)
        })).sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
        , err => console.error(err)
      );
  }
}
