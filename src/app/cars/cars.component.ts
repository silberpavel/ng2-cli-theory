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
  addCarStatus =false;
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', "Lada", 'Bently'];
  dates = [
    new Date( 2015, 7, 27).toDateString(),
    new Date( 2011, 2, 2).toDateString(),
    new Date( 2012, 11, 25).toDateString(),
    new Date( 2014, 5, 27).toDateString(),
  ];
  

  constructor() {

  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName ='';
  }



}
