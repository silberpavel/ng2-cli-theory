import { Directive, ElementRef, OnInit, Renderer2, asNativeElements, HostListener } from "@angular/core";

@Directive({
    selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {

    constructor(private element: ElementRef, private renderer: Renderer2) {
    }


    ngOnInit() {

        // console.log(this.element);
        // this.element.nativeElement.style.backgroundColor = 'LightGreen';
        
    }

    // @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
    //         console.log(event); 
    //     }


    @HostListener('mouseenter') mouseEnter() {
        const { nativeElement } = this.element;
        this.renderer.setStyle(nativeElement, 'background-color', 'Green');
        this.renderer.addClass(this.element.nativeElement, 'white-text');
    }
    @HostListener('mouseleave') mouseLeave() {
        const { nativeElement } = this.element;
        this.renderer.setStyle(nativeElement, 'background-color', 'transparent');
        this.renderer.removeClass(this.element.nativeElement, 'white-text');

    }
}