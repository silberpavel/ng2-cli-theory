# SERVICES(06)-Use of service in the other service

## Создаем сервис который отвечает за хранение данных
## Это основное придназначение сервисов в Angular 2
# main mission to save some data and move it to components

*** В этой часте пример как импортировать сервис внутрь другова сервиса.

** Для того что-бы в сервисе ижектить какие то другие сущности нужно добавить (@Injectable)
```diff 
+ @Injectable добавляем в сервис в который хотим добавить другой сервис
```
