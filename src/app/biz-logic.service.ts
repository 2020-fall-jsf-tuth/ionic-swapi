import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BizLogicService {

  constructor() { }

  getDisplayColor(planet) {

    if ('unknown' == planet.name)
      return 'goldenrod';
    else if ('Tatooine' == planet.name)
      return 'green';
    else
      return 'inherit';
  }

}
