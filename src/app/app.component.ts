import { Component } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { delay } from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: 'app-root',
  template: `
    <div class="col-xs-8 col-xs-offset-2">

      <h1>{{ title }}</h1>

      <input type="text" class="form-control" [(ngModel)]="searchCar">
      <button class="btn btn-primary" (click)="addCar()">Добавить</button>
      <hr>
      <ul class="list-group">
        <li class="list-group-item"

        *ngFor="let car of cars | carFilter: searchCar: 'name'; let i = index"
        ><b>{{ i + 1 }}</b> {{ car.name }} <i>{{ car.descr }}</i></li>

      </ul>
    </div>
  `
})
export class AppComponent {
  searchCar = '';
  cars = [
    {name: 'Ford', descr: 'WFM 1'},
    { name: 'Mazda', descr: 'WFM 2'},
    { name: 'Bently', descr: 'WFM 3'},
    { name: 'Audi', descr: 'WFM 4'},
    { name: 'Mercedes-Benz', descr: 'WFM 5'},
    { name: 'BMW', descr: 'WFM 6'},
  ];

  title ='';
  // RXJS - выучить...
  asyncTitle = of('Async title 3 seconds')
  .pipe(delay(3000))
  .subscribe((str) => this.title = str);

  addCar() {
    this.cars.push({
      name: 'New Car',
      descr: 'WFM'
    });
  }
}



// Чтобы создать Pipe: 
// 1. Мы создам класс который имплементится от PipeTransform
// export class PowPipe implements PipeTransform
// Интерфейс которого так же импортитуется из '@angular/core'
// import { Pipe, PipeTransform } from '@angular/core';
// 2. В декораторе @Pipe (имя Пайпа, that wr use in template): указываем name: 'appPow'
// 3. Registration in @NgModule  (app.models.ts)  
// AND NOW, WE CAN USE IT!

// PIPE CLI:  ng g p my-test-pipe
