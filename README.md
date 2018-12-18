# Параметры адресной строки. Часть 2
* Example
```
localhost:4200/cars/1/Ford?year=2017&color=red#pic
```

* Shows parametrs in address line
```ts
[queryParams]="{year: car.year, color: car.color}"
```


