// Импортируем другой сервис (ConsoleService)
import { ConsoleService } from './console.service'
import { Injectable } from '@angular/core';

// Декоратор для возможности использования сервиса внутри другова сервиса
@Injectable()
export class CarsService {
    // добавляем (ConsoleService)
    constructor(private consoleSevice: ConsoleService) {}

    cars = [
        {
            name: 'Ford',
            isSold: false
        },
        {
            name: 'Mazda',
            isSold: true
        },
        {
            name: 'Mercedes-Benz',
            isSold: false
        },
    ];


    addCar(name: string) {
        this.cars.push({isSold: false, name});
        // Выводим в консоль, инфу о том что добавили/удалили (by ConsoleService)
        this.consoleSevice.log(`Машина ${name} была добавлена!`)
    }



}
