import { Component, 
  Input,  
  ElementRef, 
  ContentChild, 
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements 
  OnInit, 
  DoCheck,
  OnChanges {
  @Input('carItem') car:{name:string, year:number};
  @Input() name: string;
  @ContentChild('carHeading') carHeading:ElementRef;

  constructor() {
    console.log('constructor');
  }

  //Callback
  ngOnInit() {
    console.log('ngOnInit');
    
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);

  }

  ngDoCheck() {
    console.log('ngDoCheck');
    
  }

  ngAfterContentInit() {
    console.log('AfterContentInit');
    
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked');
    
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
    
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked');
    
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }

}
  