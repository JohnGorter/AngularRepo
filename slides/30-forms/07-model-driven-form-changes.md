### Model driven: Change detection

Get notified of changes:

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'search',
    templateUrl: 'search.component.html'
}))
export class SearchComponent implements OnInit {
	searchControl = new FormControl();

	doSomething() {
		this.searchControl.valueChanges.subscribe(value => {
			// do something with value here
		});
	}
}
```