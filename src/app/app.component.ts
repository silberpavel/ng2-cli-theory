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
      // третее свойство/состояние trigger (transition - переход)
      transition('start => end', animate(3000)),
      transition('end => start', animate('3000ms 0.5s ease-out'))
    ]),
    //
    trigger('popOverState', [


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
//======================
  show = false;

  get stateName() {
    return this.show ? 'show' : 'hide';
  }  
  
  toggle() {
    console.log('hover');    
    this.show = !this.show;
  }







}
