# Блок 8. Теория. HTTP
## Получение данных. Метод GET

Mock data = подражающее данные

### HttpModule Must be connected (in component)
```ts
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ]
})
```

### Создаем сервис и работаем через него
```ts

```

[JSON Server](https://github.com/typicode/json-server)

* npm install -g json-server

Start JSON Server
* json-server --watch db.json

Now if you go to http://localhost:3000/posts/1, you'll get
```ts
{ "id": 1, "title": "json-server", "author": "typicode" }
```







