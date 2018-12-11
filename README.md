# R Группировка форм  (Групировка контролов -> form-control)
```ts
  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        pass: new FormControl('', Validators.required),
      }),
      country: new FormControl('ru'),
      answer: new FormControl('no')
    });
  }
```
![R Группировка форм](https://ibb.co/g7c2WVj)