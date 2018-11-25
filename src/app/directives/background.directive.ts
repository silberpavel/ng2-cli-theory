import { Directive, ElementRef, OnInit, Renderer2, asNativeElements, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {

    @HostBinding('style.backgroundColor') background: string;           //  !!!

    constructor (private element: ElementRef, private renderer: Renderer2) {
    }


    ngOnInit() {
        
    }


    @HostListener('mouseenter') mouseEnter() {
        this.background = 'Green';
    }
    @HostListener('mouseleave') mouseLeave() {
        this.background = 'transparent';


    }
}