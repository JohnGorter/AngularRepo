### A reusable loading component

```ts
import { Component, Input } from '@angular/core';

@Component({
	selector: 'loading',
	templateUrl: 'loading.component.html'
})
export class LoadingComponent {
	@Input() message: string;
}
```

```html
<div class="loading">
	<div class="icon"></div>
	<span>{{message}}</span>
</div>
```

---

### Using the loading component

```ts
import { LoadingComponent } from './loading.component';
import { ListCarsComponent } from './list-cars.component';

@NgModule({
  declarations: [ /*...*/, ListCarsComponent, LoadingComponent],
  /*...*/
})
export class AppModule { }
```

```ts
import { Component } from '@angular/core';
import { LoadingComponent } from './loading.component';
import { Car } from './car'; // a simple Car class with a make and type

@Component({
    selector: 'list-cars',
    templateUrl: 'list-cars.component.html',
})
export class ListCarsComponent {
	cars: Cars[] = null; /* TODO: Get list of cars from the backend*/
}
```

```html
<loading [message]="'Very busy retrieving cars'" *ngIf="!cars"></loading>
<li *ngFor="let car of cars" *ngIf="cars">
	{{car.make}} {{car.type}}
</li>
```