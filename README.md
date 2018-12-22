# Блок 11. Теория. Анимации
# Создание анимации

1. trigger (это грубо говоря название анимации) and it has name 
```ts    
    trigger('clickedDiv', [ 
```
2. second parametr it is array, where we decsribe all our animation.
3. The animation we decsribe by states 
```ts
    state('start', style({  
```
4. To make transition between states we use 
```ts
    transition('start => end', animate(3000)),
    transition('end => start', animate('3000ms 0.5s ease-out'))
```

5. Для того что бы анимация применилась, we add name of the trigger ('@clickedDiv') after this, binding to some variable [@clickedDiv]="clickedDivState".
On click we change our animation
* app.component.html
```html
<div
  (click)="changeDivState()"
  [@clickedDiv]="clickedDivState"
></div>
```
* app.component.ts
```ts
export class AppComponent {
  clickedDivState = 'start';

  changeDivState() {
    this.clickedDivState = 'end';
    setTimeout(() => {
      this.clickedDivState = 'start';
    }, 3000);
  }
}
```
