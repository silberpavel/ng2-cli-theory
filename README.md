# SERVICES(06)-Communication components through the service

## Создаем сервис который отвечает за хранение данных
## Это основное придназначение сервисов в Angular 2
# main mission to save some data and move it to components
```ts
export class CarsService {
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
}
```