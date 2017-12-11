### Show/hide with *ngIf

```ts
import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html'
})
export class AppComponent {
	showText: boolean = false;

	toggle() {
		this.showText = !this.showText;
	}
}
```

app.component.html:

```html
<button (click)="toggle()">Toggle text</button>
<div *ngIf="showText">Hi there!</div>
```