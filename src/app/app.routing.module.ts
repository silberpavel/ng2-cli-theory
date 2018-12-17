import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { CarPageComponent } from './car-page/car-page.component';


const appRoutes: Routes = [
    // localhost:4200/cars
    { path: 'cars', component: CarsPageComponent },
    // localhost:4200/cars/3/Audi
    { path: 'cars/:id/:name', component: CarPageComponent },
    { path: '', component: HomePageComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
