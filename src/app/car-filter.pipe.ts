import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(CarList, searchStr: string, fieldName: string) {
    if (CarList.length === 0 || searchStr === '') {

      return CarList;
    }

    // return CarList.filter(car => car.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
    return CarList.filter(car => car[fieldName].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }

}













