### Handle a mouse click

```ts
import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html'
})
export class AppComponent {
	foo() {
		console.log('Hi there!');
	}
}
```

app.component.html:

```html
<button (click)="foo()">Print on console</button>
```

Within the parenthesis you can supply any event name.