import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {


  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  // Defaults
  defaultAnswer = 'no';
  defaultCountry = 'by';

  submitForm(form: NgForm) {   
    console.log("submited!", form);
  }
}
