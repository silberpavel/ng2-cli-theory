import { Component } from '@angular/core';
import { divTrigger } from './app.animations';
import { changeWidthTrigger } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [divTrigger, changeWidthTrigger]
})
export class AppComponent {
  isVisible = false;
}
