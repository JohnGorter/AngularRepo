# Lab: Components

## Exercise 1: Splitting up components

Our contact component is bloated! Let's place the form of our page in a separate component, `<contact-form>`.

1. in `src/app/`, create a file `contact-form.component.ts` and create a new component.

    ```ts
    import { Component } from '@angular/core';

    @Component({
        selector: 'contact-form',
        templateUrl: './contact-form.component.html'
    })
    export class ContactFormComponent{
        constructor() { }
    }
    ```

1. Also create the `contact-form.component.html`. Leave it empty for now.

1. Register this component with the module:

    ```ts
    import { ContactFormComponent } from './contact-form.component';

    @NgModule({
        imports: [...],
        declarations: [..., ContactFormComponent],
        exports: [...]
    })
    export class AppModule { }
    ```

1. The component will let its surrounding component know when a contact has been added by using an `@Output()` `EventEmitter`.
     ```ts
    export class ContactFormComponent {
        @Output() add = new EventEmitter<Contact>();
    ```
    
    Remember to import `Output()` and `EventEmitter`.

    ```ts
    import { Component, Output, EventEmitter } from '@angular/core';
    ```
    
1. Move the form HTML to the `contact-form.component.html`.
1. Move the form validation logic and the submission handling to the `ContactFormComponent`. Only, instead of directly adding to the list, use the `Output()` variable to emit that a new contact has been added:
    ```ts
    addContact() {
        this.add.emit(this.addContactForm.value);
    }
    ```
1. In `src/app/app.component.html`, include the new component and register for the custom event.

    ```html
    <contact-form (add)="addContact($event)"></contact-form>
    ```

    Modify this `addContact()` to correctly work with the contact parameter being passed in.

Our new component should now be working!

## Exercise 2: Splitting up more

Do the same thing for the table on our `AppComponent` by creating a `<contact-list>` component.

## Exercise 3: Refactor

It's getting a bit crowded in our `src/app/` folder. Create separate folders for all components/pipes:

```bash
app
|
+- contact-form
|  +- contact-form.component.html
|  +- contact-form.component.ts
+- contact-list
|  +- contact-list.component.html
|  +- contact-list.component.ts
+- contact-name
|  +- contact-name.pipe.spec.ts
|  +- contact-name.pipe.ts
+- models
|  +- contact.ts
+- services
|  +- contacts.service.ts
```

## Challenge

If you're fast enough, here's an extra challenge: Create a component for the `contact-row`. To do this, you will need to configure your component with an attribute selector.