## TD Создание формы
1. Создаем маркеры на инпуты для того чтобы Ангуляр знал что ему выцеплять.
**app.component.html**
```html
    <div class="form-group">
      <label>Пароль</label>
      <input 
      type="password" 
      class="form-control"
      ngModel                   // MARKERS
      name="pass"               // MARKERS
      >
```

1.1 Добавляем специальный медот ngSubmit (и передаем тот метод который будет выполнятся)
**app.component.html**
```html
  <form (ngSubmit)="submitForm()">
```

1.2 Создаем даный метод в компоненте
**app.component.ts**
```ts
  export class AppComponent {
    submitForm() {
      console.log("submited!");
    }
  }
```
* При нажатии на Submit должны получить элементэтой формы!


2. Нужно указать условия по которой нужно делать валидацию. (обязательное поле или нет)
3. Нужно обработать кнопку "Сохранить" (submit)
4. Посмотреть те данные которые мы ввели.