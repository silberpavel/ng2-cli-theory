import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  // None - to make global style for all in component
  encapsulation: ViewEncapsulation.None   // Native - shadow-root...
})
export class CarsComponent {



  cars: [{name: string, year: number}] = [{
    name: 'Ford',
    year: 2015
  }, {
    name: 'Mazda',
    year: 2010
  }, {
    name: 'Audi',
    year: 2017
  }];

  constructor() {
  }

  updateCarList(car: {name:string, year:number}) {
    this.cars.push(car);
  }




}
