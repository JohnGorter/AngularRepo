### Model driven: Shorter form group

With a lot of form controls, try this shorthand notation 

```ts
import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	postalCodeForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.postalCodeForm = this.fb.group({
			postalCode: ['', [Validators.required]]
		});
	}

	save() {
		// All inputs are accumulated onto the value
		console.log('Save postal code: ', this.postalCodeForm.value);
	}
}
```
<!-- .element: class="stretch" -->