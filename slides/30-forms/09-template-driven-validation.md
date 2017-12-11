### Template driven: Form-level validation

Use a template reference variable to access the form metadata 

```html
<form (ngSubmit)="save()" novalidate #f="ngForm">
    <label for="inputPostalCode">Postal code:</label>
    <input type="text" 
           id="inputPostalCode" 
           [(ngModel)]="postalCode" 
           name="postalCode">

    <button [disabled]="f.invalid">Save</button>
</form>
```

---

### Template driven: Input level validation

Use a template reference variable to access the input metadata

```html
<form (ngSubmit)="save()" novalidate>
    <label for="inputPostalCode">Postal code:</label>
    <input type="text" 
	       id="inputPostalCode" 
		   [(ngModel)]="postalCode"
		   name="postalCode" 
		   #postalCode="ngModel"
		   required>
	<div *ngIf="postalCode.dirty && postalCode.invalid">
		This is so invalid.
	</div>
	<div *ngIf="postalCode.errors?.required">
		This field is required.
	</div>
		
    <button>Save</button>
</form>
```

---

### Built-in validators

Angular comes with the following validators built-in: 

* required
  ```html
  <input [(ngModel)]="postalCode" required>
  ```
* pattern
  ```html
  <input [(ngModel)]="postalCode" pattern="^[a-zA-Z]{4}[0-9]{2}$">
  ```
* minlength/maxlength
  ```html
  <input [(ngModel)]="postalCode" minlength="6" maxlength="7">
  ```
