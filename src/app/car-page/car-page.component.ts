import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];

    // ПРОСЛУШКА, СТРИМ
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.name = params['name'];      
    });

  }

}