import { 
  Component, 
  OnInit, 
  EventEmitter, 
  Output, 
  ViewChild, 
  ElementRef 
} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  // carName = '';
  // carYear = 2017;
  @Output('onAddCar') carEmitter = new EventEmitter<{ name: string, year: number }>(); 
  @ViewChild('carYearInput') carYearInput: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

  
  addCar(carNameEl: HTMLInputElement) {

    // console.log(carNameEl.value);
    // console.log(this.carYearInput.nativeElement.value);    

      // todo : action
    this.carEmitter.emit({
      name: carNameEl.value,
      year: +this.carYearInput.nativeElement.value
    });

    carNameEl.value = '';
    this.carYearInput.nativeElement.value = 2018;
    // this.carYear = 2017;
  }



}
