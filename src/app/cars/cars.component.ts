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
  cars = ['Ford', 'Audi', 'BMW'];
  items = [{id: 30, name: 'item 1'},{id: 40, name: 'item 2'},{id: 50, name: 'item 3'}];

  constructor() {

  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName ='';
  }



}
