import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here
// import { AppComponent } from './app.component';


@Component({
  //              ===== SELECTORS ===== 
  // selector: 'app-cars',      // throught HTML TAG
  // selector: '[app-cars]',    // throught ATTRIBUTE
  selector: '.app-cars',        // trought CLASS

  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  carName = '';
  carYear = 2017;

  cars: [(name: string, year: number)] = [{
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


  addCar() {
    this.cars.push({
      name: this.carName,
      year: this.carYear
    });
    this.carName = '';
    this.carYear = 2017;
  }



}
