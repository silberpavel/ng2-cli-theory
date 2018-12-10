## TD Значения по умолчанию

### Default values
```html
    <div class="form-group">
      <label>Выберите страну</label>
      <select 
      class="form-control"
      [ngModel]="defaultCountry"        <!- Default values -->
      name="country"
      required
      >
        <option value="ru">Россия</option>
        <option value="by">Белоруссия</option>
        <option value="ua">Украина</option>
      </select>
    </div>
```




