### Model driven: Validation

In the component, define your validations

```ts
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	postalCodeForm: FormGroup;

	constructor() {
		this.postalCodeForm = new FormGroup({
			postalCode: new FormControl('', [Validators.required])
		});
	}

	save() {
		// All inputs are accumulated onto the value
		console.log('Save postal code: ', this.postalCodeForm.value);
	}
}
```
<!-- .element: class="stretch" -->

---

### Model driven: Validation

Make use of various validation metadata:

```html
<form (ngSubmit)="save()" [formGroup]="postalCodeForm">
	<label for="inputPostalCode">Postal code:</label>
	<input type="text" id="inputPostalCode" formControlName="postalCode">

	<div *ngIf="postalCodeForm.get('postalCode').dirty && 
	            postalCodeForm.get('postalCode').invalid">
		This is so invalid.
	</div>

	<button [disabled]="postalCodeForm.invalid">Save</button>
</form>
```

---

### Model driven: Built-in validators

Angular comes with the following validators built-in: 

* Validators.required
* Validators.pattern
	```ts
	constructor() {
		this.postalCodeForm = new FormGroup({
			postalCode: new FormControl('', [Validators.pattern('^[A-Z0-9]+$')])
		});
	}
	```
* Validators.minLength
* Validators.maxLength