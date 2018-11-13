import { Component } from '@angular/core';
import { CommandExecutor } from 'selenium-webdriver/safari';

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

  constructor() {
    setTimeout( () => {
      this.canAddCar = true;
    },2000);
  }

  addCarsStatus = '';
  addCar() {
    this.addCarsStatus = "Car added!"
  }
  
  // onKeyUp(event:Event) {
  //   this.inputText = (<HTMLInputElement>event.target).value;
  // }

// <!--Способ номер №2  -- >   
  // onKeyUp(event) {
  //     this.inputText = event;
  // }

// <!--Способ номер №2    Еще добавили отображение после нажатия Enter -- >   
  onKeyUp(event) {
    // console.log(event);
    this.inputText = event;
    if (event.code === 'g') {
      console.log(event);
      
      this.inputText = event.target.value;
    }
  }








}
