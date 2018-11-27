import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'appPow'
})
export class PowPipe implements PipeTransform {
    transform(value: any, Pownumber: number = 1, symbol: string = '=') {
        // return value * Pownumber;   Question on Stackoverflow
        return symbol + Math.pow(value, Pownumber);
    }

}