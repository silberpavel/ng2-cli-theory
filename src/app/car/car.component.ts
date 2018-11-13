import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  // template: `<div class="car"><h2>Single car template test</h2>
  //           <p>Text Text Text Text Text </p></div>`,
  styleUrls: ['./car.component.css']
//   styles: [`h2 {
//     color: green;
// }
// p {
//     color: magenta;
// }`]
})
export class CarComponent {

  carName = 'Jeep';
  carYear:number = 2021;

}
