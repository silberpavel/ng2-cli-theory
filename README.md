# ReactiveFormsModule Валидация формы
* Second parameter of FormControl must validator or an array!
```ts
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', Validators.required),
```
Если все заполнено тогда valid: true

### If form is not valid it will be disabled => [disabled]="form.invalid"
```html
    <button 
    class="btn btn-success" 
    type="submit"
    [disabled]="form.invalid"
    >Сохранить</button>
```
### If field is not valid and out of focus, it will be add p (text) below field
```html
<p *ngIf="form.get('pass').invalid && form.get('pass').touched">Password can not be empty!</p>
```

### Field highlight (red) if not valid after focus out [Bootstrap class -> 'has-error']
```html
<div class="form-group" [ngClass]="{'has-error': form.get('pass').invalid && form.get('pass').touched}">
    <label>Пароль</label>
    <input type="password" class="form-control" formControlName="pass">
    <p *ngIf="form.get('pass').invalid && form.get('pass').touched">Password can not be empty!</p>
</div>
```