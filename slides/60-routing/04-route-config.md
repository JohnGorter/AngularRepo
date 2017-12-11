### Define where the views are shown

```ts
import { Component } from '@angular/core';
import { CarsComponent } from './cars.component';
import { CarDetailsComponent } from './car-details.component';

@Component({
	selector: 'my-app',
	templateUrl: 'my-app.component.html'
})
export class AppComponent {}
```

app/my-app.component.html

```html
<h1>Welcome to the car app!</h1>
<router-outlet></router-outlet>
```