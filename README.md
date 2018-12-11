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
![R Группировка форм]([img]https://i.imgur.com/mV4mYSM.png[/img])