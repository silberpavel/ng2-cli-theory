## TD Валидация формы. Часть 2

### Highlight of error validation (red text)
1. Удаляем stylus from @Component (app.component.ts)

2. Adding специальный класс [ngClass] 
*(app.component.html)*
```html
    <div class="form-group" [ngClass]="{'has-error': email.invalid && email.touched}">
      <label>Email</label>
      <input 
      type="text" 
      class="form-control"
      ngModel 
      name="email"
      required  
      email
      #email="ngModel"   
      >        
      <p *ngIf="email.invalid && email.touched">נא הקלידו כתובת דואר אלקטרוני נכונה</p>         
    </div>
```








