import { Component, OnInit } from '@angular/core';
import { CarsService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent  implements OnInit {

  cars = [];

  constructor(private service: CarsService) {}

    ngOnInit() {
      this.cars = this.service.cars;
    }

  



}
