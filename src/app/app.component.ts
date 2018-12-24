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
      state('show', style({
        opacity: 1,
        transform: 'scale(0.5)'

      })),
      state('hide', style({
        opacity: 0,
        // transform: 'translateX(-100%) scale(1.5) rotateZ(90deg)'
        transform: 'rotateZ(180deg)'
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
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
