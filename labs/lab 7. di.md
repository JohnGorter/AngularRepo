# Lab: Dependency injection

In our current application, `ContactListComponent` and `ContactFormComponent` depend heavily on the `AppComponent`. This last class also has logic in it that doesn't necessarily belong there. We want to decouple this and place the logic in a class responsible for it.

## Pre-exercise: Removing the couplings

Before we do anything, let's remove the couplings that are in place. In `src/app/app.component.html`:
1. Remove the `add` event listener with the `ContactFormComponent`.
1. Remove the passing along of the contacts array.

```html
<contact-form></contact-form>
<contact-list></contact-list>
```

## Exercise 1: Introducing the service

Services are great at being responsible for managing data. Let's create one.

1. Create a class (just a regular class) `contact.service.ts`.
1. Decorate the class with `@Injectable()` and register it as a provider in the `AppModule`.

   ```ts
   @NgModule({
       imports: [...],
       declarations: [...],
       exports: [...],
       providers: [..., ContactService]
   })
   export class AppModule { }
   ```
1. Now to add logic. `AppComponent` has a list of contacts and a method `addContact()` that do not belong there. Cut and paste this to our newly created `ContactService`.
1. Add a method `getContacts()` that returns the list of contacts.

   Our service is now ready to be used.

1. In our `ContactListComponent`, inject the service and retrieve your contacts. Also, remove the `@Input()` decorator in front of the contacts array, since we're decoupling from `AppComponent`.

    ```ts
    export class ContactListComponent implements OnInit {
        contacts: Contact[];

        constructor(private contactService: ContactService) { }

        ngOnInit() {
            this.contacts = this.contactService.getContacts();
        }
    }
    ```
1. Now change `ContactFormComponent` to work with the service as well. Inject the class and call `addContact()` when a form is submitted. Also, remove the `@Output()` decorated `add` EventEmitter, since we're decoupling from `AppComponent`.

The application should now work as before. `AppComponent` should now be an empty class, absolved from responsibilities.

## Exercise 2: Mocking services

Testing a service is a lot like testing pipes. As long as your service doesn't have any dependencies, you can simply use `new ContactService()` to instantiate the service and call its methods.

More interesting is to test the interaction between a component and a service. We'll be using the `TestBed` class in this exercise.

### 2a. Creating a mock service

First, let's create a mock implementation of our `ContactService` to use during testing.

1. Create a folder `mocks` in `src/app/`.
1. Create a file `contact.service.mock.spec.ts` in this new folder.
1. In the file, create a class `ContactServiceMock` that exposes the same methods as our real `ContactService`. The implementation of these methods may remain empty.

    ```ts
    import { Contact } from '../models/contact';

    export class ContactServiceMock {
        getContacts() { }

        addContact(newContact: Contact) { }
    }
    ```

1. Add a constructor to this class. From here, we will use Jasmine's `spyOn()` to define what these methods should return. This functions also helps in checking whether the methods are being called when they should be.

    ```ts
    constructor() {
        spyOn(this, 'getContacts').and.returnValue([ { firstName: '...' } ]);
        spyOn(this, 'addContact');
    }
    ```

### 2b. Testing with the mock

Now to test the `ContactFormComponent`.

1. In `src/app/contact-form/`, add a file `contact-form.component.spec.ts`.
1. Add the basic skeleton for unittesting: a `describe()`, `beforeEach()` and an `it()`.
1. For dealing with dependency injection during testing, Angular offers a `TestBed` class. Use this class in the `beforeEach()` to configure what's being used during this test, then create the component:
    ```ts
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule],
            declarations: [
                ContactFormComponent,
                ContactNamePipe
            ],
            providers: [
                { provide: ContactService, useClass: ContactServiceMock }
            ]
        });
        contactForm = TestBed.createComponent(ContactFormComponent).componentInstance;

        // initialize the form
        contactForm.ngOnInit();
    });
    ```

    Also note we're calling `ngOnInit()` to initialize the reactive form.

1. After the setup, the unittests itself can be quite small. Using Angular's helper method `inject()`, get a reference to the mocked contact service and check whether `addContact()` is called when adding a contact.

    ```ts
	it('should support adding a new contact', inject([ContactService], (contactService: ContactService) => {
		contactForm.addContactReactive();
		expect(contactService.addContact).toHaveBeenCalled();
	}));
    ```

## Exercise 3: Further testing

Now test whether the `ContactListComponent` retrieves the contacts from the service correctly.