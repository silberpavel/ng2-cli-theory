import { Component } from '@angular/core';
import { CarsService } from './cars.service';
// import { Response } from '@angular/http'

interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  colors = [
    'red',
    'blue',
    'pink',
    'grey',
    'silver',
    'green'
  ];
  cars: Cars[] = [];
  carName: string = '';

  constructor(private carsService: CarsService) {}

  loadCars() {
    this.carsService
    .getCars()

    // .subscribe((response: Response) => {    
    //   const data =response.json();
    //   this.cars = data;
    // });

    // Better option below
    .subscribe((cars: Cars[]) => {
      this.cars = cars;
    });
  }

  addCar() {
    this.carsService
    .addCar(this.carName)
    .subscribe((car: Cars) => {
      this.cars.push(car);
    });
    this.carName = '';
  }

  getRandColor() {
    const num = Math.round(Math.random() * (this.colors.length -1));
    return this.colors[num];
  }

  setNewColor(car: Cars) {
    this.carsService.changeColor(car, this.getRandColor())
      .subscribe((data) => {
        console.log(data);
      });
  }

}
