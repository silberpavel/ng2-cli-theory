import { Component } from '@angular/core'; 

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  carName = 'Jeep';
  carYear:number = 2021;

  getName () {
    return this.carName;
  }

}
