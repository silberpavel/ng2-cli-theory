import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

charsCount = '5';

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        pass: new FormControl('', [Validators.required, this.checkForLength.bind(this)]), //Чтобы не потерять контекст!!! bind(this)
      }),
      country: new FormControl('ru'),
      answer: new FormControl('no')
    });
  }

  onSubmit() {
    console.log('Submited!', this.form);
  }

  // must return nothing or object
  checkForLength(control:FormControl) {
    if(control.value.length <= this.charsCount) {
      return {
        'lengthError': true
      };
    }
    return null
  }

}
