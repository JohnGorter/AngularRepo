### Template driven: An Angular form

In the HTML, use `ngModel`

```html
<form (ngSubmit)="save()" novalidate>
    <label for="inputPostalCode">Postal code:</label>
    <input type="text" 
	       id="inputPostalCode" 
		   [(ngModel)]="postalCode" 
		   name="postalCode">

    <button>Save</button>
</form>
```

---

### Template driven: An Angular form

In the component, only handle the submission of the form

```ts
import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	postalCode: string;

	save() {
		console.log('Save postal code:', this.postalCode);
	}
}
```