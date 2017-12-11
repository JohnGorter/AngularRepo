### Model driven: An Angular form

In the component, build your form and handle submission

```ts
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	postalCodeForm: FormGroup;

	constructor() {
		this.postalCodeForm = new FormGroup({
			postalCode: new FormControl('') // initial value
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

### Model driven: An Angular form

Then simply define your HTML with references to your component:

```html
<form (ngSubmit)="save()" [formGroup]="postalCodeForm">
	<label for="inputPostalCode">Postal code:</label>
	<input type="text" id="inputPostalCode" formControlName="postalCode">
	<button>Save</button>
</form>
```

---

### Model driven: An Angular form

And finally import the `ReactiveFormsModule` in your app module:

```ts
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [...],
	imports: [
		//...
		ReactiveFormsModule
	],
	providers: [...]
})
export class AppModule { }
```