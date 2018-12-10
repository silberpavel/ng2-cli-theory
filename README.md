## TD Динамическое изменение формы inside component
```html
<button class="btn btn-primary" (click)="addRandEmail()">Добавить случайный email</button>
```

### Inside component
* Adding
```ts   @ViewChild('form') form: NgForm; ```

### Как забирать данные формы после submit
