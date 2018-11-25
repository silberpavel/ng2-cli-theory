import { Directive, ElementRef, OnInit, Renderer2, asNativeElements } from "@angular/core";

@Directive({
    selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }


    ngOnInit() {
        const {nativeElement} = this.element;
        this.renderer.setStyle(nativeElement, 'background-color', 'LightBlue');
        this.renderer.addClass(this.element.nativeElement, 'white-text');
;
        // console.log(this.element);
        // this.element.nativeElement.style.backgroundColor = 'LightGreen';
        
    }
}