import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    input.ng-invalid.ng-touched {
      border: 1px solid red;
      }
    `]
})
export class AppComponent {


  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  submitForm(form: NgForm) {   
    console.log("submited!", form);
  }
}
