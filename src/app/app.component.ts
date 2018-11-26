import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headerText = 'Create personal derective';
  items = [1, 2, 3, 4, 5];
  current = 1;

  onClick(number: number) {
    this.current = number;
  }

}
