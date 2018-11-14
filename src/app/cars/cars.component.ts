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
  

  constructor() {

  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName ='';
  }

  setBigCarText(car:string) {
    return car.length > 4 ? true : false;
  }



}
