import { Injectable } from "@angular/core";
import { Http } from "@angular/http";


@Injectable()
export class CarsService {
    constructor(private http: Http) {}

    getCars() {
      this.http.get();  
    }
}