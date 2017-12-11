### Looping through data with *ngFor

```ts
import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html'
})
export class AppComponent {
	cars = [
		{ make: 'Opel', type: 'Astra' },
		{ make: 'Porsche', type: '911' }
	];
}
```

app.component.html:

```html
<ul>
	<li *ngFor="let car of cars">{{car.make}} {{car.type}}</li>
</ul>
```