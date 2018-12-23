import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { reduce } from 'rxjs/operator/reduce';

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
  ,
    trigger('multi', [
      state('start', style({
        height: '150px',
        width: '150px',
        border: '5px solid black'
      })),
      state('end', style({
        height: '170px',
        width: '170px',
        border: '5px solid black',
        backgroundColor: 'blue',
        borderRadius: '50%'
      })),
      transition('start <=> end', [
        style({
          backgroundColor: 'red'
          }),
          animate(1500, style({
            backgroundColor: 'yellow'
          })),
          animate(1000, style({
            width: '200px',
            height: '200px',
            borderRadius: '50%'
          })),
          animate(1000)
        ])
      ])
    ]
})
export class AppComponent {
  clickedDivState = 'start';
  multiState = 'start';

  changeDivState() {
    this.clickedDivState = 'end';
    setTimeout(() => {
      this.clickedDivState = 'start';
    }, 3000);
  }
}
