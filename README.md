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
  <form (ngSubmit)="submitForm(form)" #form>
```

1.2 Создаем даный метод в компоненте
**app.component.ts**
```ts
  export class AppComponent {
    submitForm(form: HTMLFormElement) {     // HTMLFormElement => TS type
      console.log("submited!", form);
    }
  }
```
* При нажатии на Submit должны получить элемент этой формы!
```html
<form novalidate="" class="ng-untouched ng-pristine ng-valid">  
    <div class="form-group">
      <div>...</div>
    </div>
    <button class="btn btn-success" type="submit">Сохранить</button>

  </form>
```
* Получаем данные через объект


2. Нужно указать условия по которой нужно делать валидацию. (обязательное поле или нет)
3. Нужно обработать кнопку "Сохранить" (submit)
4. Посмотреть те данные которые мы ввели.