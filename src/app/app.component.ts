import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('clickedDiv', [
      state('start', style({
        backgroundColor: 'blue',
        width: '150px',
        height: '150px'
      })),
      state('end', style({
        backgroundColor: 'red',
        width: '50px',
        height: '300px'
      })),
      state('active', style({
        backgroundColor: 'orange',
        width: '130px',
        height: '130px'
      })),
      // третее свойство/состояние trigger (transition - переход)
      transition('start <=> end', animate('3000ms ease-in')),
      // transition('end => start', animate('3000ms 0.5s ease-out')),
      transition('start <=> active', animate(800)),
      transition('active => end', animate('3000ms 0.5s ease-out'))
    ])
  ]
})
export class AppComponent {
  clickedDivState = 'start';

  changeDivState() {
    this.clickedDivState = 'end';
    setTimeout(() => {
      this.clickedDivState = 'start';
    }, 3000);
  }
}
