### Some more pipe examples

DecimalPipe

```html
<p>decimal: {{2.3454 | number}}</p>
<p>decimal formatted: {{2.3454 | number : '1.0-2'}}</p>
```

CurrencyPipe

```html
<p>currency: {{2.3454 | currency}}</p>
<p>currency in 'EUR': {{2.3454 | currency : 'EUR'}}</p>
<p>currency in '€': {{2.3454 | currency : 'EUR' : true}}</p>
<p>currency in '€', formatted: {{2.3 | currency : 'EUR' : true : '1.2-2'}}</p>
```

The format for the last parameter: 

`{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`