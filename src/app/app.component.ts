import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  @ViewChild('form') form: NgForm;

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

  // Как забирать данные формы после submit
  formData = {};
  isSubmited = false;

  submitForm(form: NgForm) {  
    this.isSubmited = true; 
    // console.log("submited!", form);
    this.formData = this.form.value; // Можем добавить в formData все свойства form
    this.form.reset();  // CLEAN all inputs field!
  }

  addRandEmail() {
    const randEmail = 'wtf@gmail.com';
    // this.form.setValue({
    //   user: {
    //     pass: '',
    //     email: randEmail
    //   },
    //   country: '',
    //   answer: ''
    // });

    this.form.form.patchValue({       // patchValue не стерает поля в форме
      user: {email: randEmail}
    });
  }


}
