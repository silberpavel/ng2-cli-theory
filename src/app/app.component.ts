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

}
