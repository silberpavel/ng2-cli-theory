import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="col-xs-8 col-xs-offset-2">

    <!--
      <h2>{{ name }}</h2>
      <h2>{{ name | lowercase }}</h2>
      <h2>{{ name | uppercase }}</h2>
      <h2>{{ name | slice:0:3 }}</h2>
      <h2>{{ name | slice:3:6 }}</h2>
      <h2>{{ name | slice:8 }}</h2>
      <h2>{{ name | slice:8 | uppercase}}</h2>

      <hr>

      <h2>{{ pi }}</h2>
      <h2>{{ pi | number }}</h2>
      <h2>{{ pi | number:'1.3-4' }}</h2>
      <h2>{{ pi | number:'2.2-2' }}</h2>

      <hr>

      <h2>{{ money | currency }}</h2>
      <h2>{{ money | currency: 'USD' }}</h2>
      <h2>{{ money | currency: 'USD': false }}</h2>

      <h2>{{ money | currency: 'EUR' }}</h2>
      <h2>{{ money | currency: 'EUR': false }}</h2>

      <h2>{{ money | currency: 'NIS' }}</h2>

      <h2>{{ money | currency: 'RUB' }}</h2>

      <hr>
    -->

      <h2>{{ date }}</h2>
      <p>here is pipe below</p>
      <h2>{{ date | date }}</h2>
      <h2>{{ date | date: 'fullDate' }}</h2>
      <h2>{{ date | date: 'shortDate' }}</h2>
      <h2>{{ date | date: 'fullTime' }}</h2>
      <h2>{{ date | date: 'shortTime' }}</h2>

      <a href="https://angular.io/api?query=pipe">API List (Pipes)</a>


      <hr>

      <h2>{{ amount }}</h2>
      <h2>{{ amount | percent }}</h2>

      <hr>

      <h2>{{ object }}</h2>
      <pre>{{ object | json }}</pre>







    </div>
  `
})
export class AppComponent {
  name = 'WebForMyself';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested:
      {
        xyz: 3,
        numbers: [1, 2, 3]
      }
  };
}
