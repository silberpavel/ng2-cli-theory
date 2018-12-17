# Навигация между страницами

### Делаем навигацию без перезагрузки

```html
      <ul class="nav navbar-nav">
        <li 
          routerLinkActive="active"
          [routerLinkActiveOptions]="{exact: true}"
        >
        <a routerLink="/">Главная</a>
        </li>
        <li 
          routerLinkActive="active"
        >
        <a [routerLink]="'/cars'">Машины</a>
      </li>
      </ul>
```

<!-- routerLinkActiveOptions -->
<!-- helps to remove active class (in navbar) for main page -->