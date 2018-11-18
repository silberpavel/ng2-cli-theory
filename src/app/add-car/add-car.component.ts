import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carName = '';
  carYear = 2017;

  constructor() { }

  ngOnInit() {
  }

  
  addCar() {
    this.carName = '';
    this.carYear = 2017;
  }



}
