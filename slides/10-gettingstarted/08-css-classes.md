### Set CSS classes based on some flag

```ts
import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html'
})
export class AppComponent {
	cars = [
		{ make: 'Opel', type: 'Astra', price: 29995 },
		{ make: 'Porsche', type: '911', price: 145000 },
		{ make: 'Fiat', type: 'Uno', price: 1800 }
	];
}
```

app.component.html:

```html
<ul>
	<li *ngFor="let car of cars" [class.expensive]="car.price > 15000">
		{{car.make}} {{car.type}}
	</li>
</ul>
```