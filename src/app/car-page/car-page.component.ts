import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { setDefaultService } from 'selenium-webdriver/edge';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

  id: number;
  name: string;
  color: string;
  year: string;
  hash: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.color = this.route.snapshot.queryParams['color'];
    this.year = this.route.snapshot.queryParams['year'];
    this.hash = this.route.snapshot.fragment;

    // ПРОСЛУШКА, СТРИМ
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.name = params['name'];      
    });

    // Для динамического обновление данных (#pic....)
    this.route.queryParams.subscribe((params: Params) => {
      this.color = params['color'];
      this.year = params['year'];
    });

    openMazdaPage () {
      this.router.navigate(['./cars', 8, 'Mazda'], {
        queryParams: {
          color: 'pink',
          year: 1995
        },
        fragment: 'pic'
      });
    }

  }

}