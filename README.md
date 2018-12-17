# Программная навигация
## Using TypeScript


### Relative route (Относительный переход)
```ts
import { Router, ActivatedRoute } from '@angular/router';

export class HomePageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  openCarsPage() {
    this.router.navigate(['/cars'], {relativeTo: this.route});
  }

}
```
