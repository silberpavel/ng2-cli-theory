import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

// Создал новый компонент через CLI, (команда ng g c photo-gallery

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css'],
  animations: [
    trigger('photoState', [
      state('move', style({
        transform: 'translateX(-100%) translateY(50px)',
      })),      
      state('enlarge', style({
        transform: 'scale(1.5)',
      })),
      state('spin', style({
        transform: 'rotateZ(90deg) rotateY(180deg)',
      })),
      transition('spin => move', animate('2000ms ease-out')),
      transition('* => *', animate('500ms ease'))
    ])
  ]
})

export class PhotoGalleryComponent implements OnInit {

  constructor() {}

    position: string = '';
    photoUrl = "\..\assets\images\ecab.png";
   
   changePosition(newPosition: string) {
     this.position = newPosition;
   }

  ngOnInit() {
  }

}
