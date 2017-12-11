### Link to another route

You can use `routerLink` to link to another route

```html
<a routerLink="/cars">Back to the cars overview</a>
```

And for routes with parameters we need an expression:

```html
<a [routerLink]="['/cars', 14]">View details of this amazing car</a>
```