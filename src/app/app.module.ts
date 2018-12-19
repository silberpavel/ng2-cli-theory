import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';


import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CarsModule} from './cars-page/cars.module'
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [      // The place where we declere pipies, components, directives
    AppComponent,
    HomePageComponent,
    HeaderComponent
  ],
  imports: [          // Модули которые нужны для работы
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,     
    CarsModule,            // Registration of module
    SharedModule

  ],
  providers: [],     // Where we register our services
  bootstrap: [AppComponent]     // То что нужно запустить при старте нашего приложения (тобишь корневой компонент)
})
export class AppModule { }
