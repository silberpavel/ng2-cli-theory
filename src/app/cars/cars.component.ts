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

  canAddCar = false;
  inputText = '';
  inputText2 = '';


  constructor() {
    setTimeout( () => {
      this.canAddCar = true;
    },2000);
  }

  addCarsStatus = '';
  addCar() {
    this.addCarsStatus = "Car added!"
  }
  
  // Передаем из шаблона в компонент

  // onKeyUp(event:Event) {
  //   this.inputText = (<HTMLInputElement>event.target).value;
  // }

// <!--Способ номер №2  -- >   
  // onKeyUp(event) {
  //     this.inputText = event;
  // }

// <!--Способ номер №3    Еще добавили отображение после нажатия Enter -- >   
  // onKeyUp(event) {
  //   if (event.code === 'Enter') {
  //     // console.log(event);
  //     this.inputText = event.target.value;
  //   }
  // }

  // <!--Способ номер №4    Еще добавили отображение после нажатия Enter -- >   
  onKeyUp(event) {
      this.inputText = event.target.value;
    }
  







}
