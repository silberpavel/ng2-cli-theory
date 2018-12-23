import {
    animate,
    state,
    style,
    transition,
    trigger
  } from '@angular/animations';


  export const divTrigger = trigger('divTrigger', [
    
      // void => *
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(1500, style({
            opacity: 1
        }))
    ]),
    // * => void
    transition(':leave', [animate(1500, style({
            opacity: 0
    }))])
  ]);

export const changeWidthTrigger = trigger('changeWidth' , [
  transition('* => *', [
      animate(1000, style({
          width: '10px'
      })),
      animate(1000, style({
          width: '*'
      }))
  ])  
])
