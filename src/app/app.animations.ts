import {
    animate,
    state,
    group,
    keyframes,
    style,
    transition,
    trigger
  } from '@angular/animations';


  export const divTrigger = trigger('divTrigger', [
    
      // void => *
    transition(':enter', [
        style({
            width: '*',
            height:'*'
        }),
        group([
            animate(2000, style({
                width: '200px',
                height:'200px'
            })),  
            animate(6000, keyframes([
                style({backgroundColor: 'blue'}),
                style({backgroundColor: 'green'}),
                style({backgroundColor: 'red'}),
                style({backgroundColor: 'magenta'}),
                style({backgroundColor: 'green'}),
                style({backgroundColor: 'yellow'})
            ]))

        ]),
        animate(1000)
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
 