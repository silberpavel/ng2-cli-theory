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
![R Группировка форм](https://serving.photos.photobox.com/51104816408e37e8abd21a7d9002782eff44cc173ec0e12e42f5ae7ee3678f2d76b719dd.jpg)