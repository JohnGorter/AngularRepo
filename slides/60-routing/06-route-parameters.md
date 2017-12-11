### Accessing route parameters

```ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'car-details',
	templateUrl: 'car-details.component.html'
})
export class CarDetailsComponent implements OnInit {
	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params
			.map(params => params['id'])
			.subscribe((id) => console.log('Retrieve some car data:', id));
	}
}
```

Or, if you're not interested in parameter changes:

```ts
ngOnInit() {
	console.log('Retrieve some car data:', this.route.snapshot.params.id);
}
```