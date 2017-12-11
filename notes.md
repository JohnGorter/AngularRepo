#A2

## Recap day 1
### Angular
- Components
  @Component({
  })

### TypeScript
* Types, met `:`
* classes, interfaces
* Structural typing

## Forms

### Model driven

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, AbstractControl, Validators } from '@angular/forms';

function requireLightSaberColor(control: AbstractControl) {
  if (control.get('isJedi').value && !control.get('lightSabelColor').value) {
    return { 'noLightSaberColor': true };
  } else {
    return null;
  }
}

@Component({
  selector: 'sw-character-form-model-driven',
  template: `
  <h2>Model driven</h2>
  <form novalidate [formGroup]="form">
   <input formControlName="name" placeholder="name">
   <input formControlName="age" type="number" placeholder="age">
   <input formControlName="firstAppearance" placeholder="first appearance">
   <div formGroupName="jedi">
    <input formControlName="isJedi" type="checkbox">
    <input formControlName="lightSabelColor">
   </div>
  </form>
  <strong>Value: {{form.value | json}}</strong>
  <strong>status: {{form.status | json}}</strong>
  <strong>errors: {{form.get('jedi').errors | json}}</strong>
 `
})
export class CharacterFormModelDriven {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      age: 0,
      firstAppearance: '',
      jedi: fb.group({
        isJedi: false,
        lightSabelColor: ''
      }, { validator: requireLightSaberColor })
    });
    this.form.patchValue({ name: 'nicojs' })
  }
}

```

### Template driven
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'sw-character-form-template-driven',
  template: `
  <h2>Template driven</h2>
  <form #f="ngForm" novalidate>
  <input ngModel name="name" placeholder="name">
  </form>
  <strong>{{f.value | json}}</strong>
  `})
export class CharacterFormTemplateDriven {

}
```

## Notes day 2
* Testing
  * Unit Testen -> Karma
    * Choose browsers
  * UI Testen -> protractor
    * Ran from nodejs
    * Async
    * Jasmine with a taste
  * Jasmine
    * Describe, it, beforeEach
    * BDD
* Forms
  * Model driven
    * formGroup, formControlName, formBuilder,
  * Template driven
    * ngModel


* Build + deployment voor productie op dag 4