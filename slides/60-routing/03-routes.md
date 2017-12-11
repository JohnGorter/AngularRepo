### Angular routes

Angular supports routing by loading views in dynamically through AJAX. To implement routing:

1. Define routes based on the interface `Route`

	```ts
	export interface Route {
		path?: string;
		component?: Type<any>;
		...
	}
	```

1. Call `RouterModule.forRoot([...])` to supply all the routes
1. Place an `<router-outlet></router-outlet>` in the HTML of your root component. This is the element where the different views are loaded into.

---

### Angular routes

Provide routes during bootstrapping:

```ts
import { Route } from '@angular/router';
import { CarsComponent } from './cars.component';
import { CarDetailsComponent } from './car-details.component';

let routes: Route[] = [
	{ path: 'cars', component: CarsComponent },
	{ path: 'cars/:id', component: CarDetailsComponent }
];
// Instead of defining all the routes in one file, you can split them up as well

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		...
	],
	declarations: [...],
	providers: [...],
	bootstrap: [...]
})
export class AppModule { }
```
<!-- .element: class="stretch" -->

---

### Accessing route information

Inject `Router`:

```ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from './car';
import { CarService } from './car.service';

@Component({
	templateUrl: 'car-details.component.html'
})
export class CarDetailsComponent {
	car: Car;

	constructor(
		private carService: CarService,
		private route: ActivatedRoute,
		private router: Router) {
		this.route.params
			.map(params => +params['id'])
			.switchMap(id => this.carService.getContact(id))
			.subscribe(car => this.car = car);
		}
}
```
<!-- .element: class="stretch" -->