import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="col-xs-8 col-xs-offset-2">
      <h2>{{ num }}</h2>
      <h2>{{ num | appPow:3 }}</h2>
      <h2>{{ num | appPow:6 }}</h2>
      <h2>{{ num | appPow }}</h2>
      <h2>{{ num | appPow:2:'===' }}</h2>

    </div>
  `
})
export class AppComponent {
  num = 2;
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
