### Lifecycle hooks

```ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'loading',
	templateUrl: 'loading.component.html'
})
export class LoadingComponent implements OnInit {
	@Input() message: string;

	constructor() {
		console.log('constructor message:', this.message);
	}

	ngOnInit() {
		console.log('onInit message:', this.message);
	}
}
```

```html
<loading [message]="'Very busy retrieving cars'" *ngIf="!cars"></loading>
<li *ngFor="let car of cars" *ngIf="cars">
	{{car.make}} {{car.type}}
</li>
```