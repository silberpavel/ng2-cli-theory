import { Directive } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor() { }

}



// Created in terminal ( "  ng g d my-directive --sprec=false  ")