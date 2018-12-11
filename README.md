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
### If field is not valid and out of focus, it will be add p below field
```html
<p *ngIf="form.get('pass').invalid && form.get('pass').touched">Password can not be empty!</p>
```

### Filed highlight (red) if not valid after focus out
```html

```