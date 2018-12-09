## TD Валидация формы. Часть 1

### Нужно указать условия по которой нужно делать валидацию. (обязательное поле или нет)
### Если поля с дерективой required не были заполнены, тодна valid: false иначе true
```html
    <div class="form-group">
      <label>Email</label>
      <input 
      type="text" 
      class="form-control"
      ngModel 
      name="email"
      required      
      >                 <!-- Directive "required" -->
    </div>
```

### Можно заблокировать кнопку Сохранить (submit) если поле не были заполнены. 
```html
    <button 
      class="btn btn-success" 
      type="submit"
      [disabled]="!form.valid"
    >Сохранить</button>
```

### Email validation
```html
    <div class="form-group">
      <label>Email</label>
      <input 
      type="text" 
      class="form-control"
      ngModel 
      name="email"
      required  
      email
      >               
    </div>
```
### Можно показывать пользователю какие поля у нас введенны не правильно
#### С помощью классов которые добавляет Ангуляр (в инпуты)
### ng-untouched => Означает что данный инпут еще не трогали
### ng-invalid =>  Означает что данный инпут сейчас не валидный
### ng-pristine =>  Означает что данный инпут сейчас пустой

# Validation (with highlight)
```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    input.ng-invalid.ng-touched {           // Два класса ng-invalid ng-touched
      border: 1px solid red;
      }
    `]
})
```









