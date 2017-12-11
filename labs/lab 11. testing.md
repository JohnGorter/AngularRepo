# Lab: Testing

## Exercise 1: Test your component

You have two components that use your `contactsService`. We'll test `InviteComponent` and we'll leave out dependency injection for now.

1. In `app/+invite/`, create `invite.component.spec.ts`
1. Import your component, its dependencies and the test dependencies
	```ts
	import { beforeEach, describe, expect, it } from '@angular/core/testing';
	import { InviteComponent } from './invite.component';
	import { ContactsService } from './contacts.service'; 
	```
1. Add a `describe()` with a `beforeEach()` and an `it()`
	```ts
	describe('InviteComponent', () => {
		let contactsService: ContactsService;
		let inviteComponent: InviteComponent;

		beforeEach(() => {

		});

		it('should retrieve a list of contacts', () => {

		});
	});
	``` 
1. In `beforeEach()`, instantiate the component and dependencies. Spy on the `getContacts()` function, we want to know whether this will be called
	```ts
	beforeEach(() => {
		contactsService = new ContactsService();
		spyOn(contactsService, 'getContacts');
	});
	```
1. In `it()`, instantiate the component and check whether contacts are being retrieved
	```ts
	it('should retrieve a list of contacts', () => {
		inviteCompoment = new InviteCompoment(contactsService);
		inviteComponent.ngOnInit();
		expect(contactsService.getContacts).toHaveBeenCalled();
	});
	```

## Exercise 2: Dependency injection

1. `import` the necessary items for DI
	```ts
	import { provide } from '@angular/core';
	import { beforeEach, describe, expect, it, inject } from '@angular/core/testing';
	import { TestComponentBuilder } from '@angular/compiler/testing';
	```
1. Create a mock class representative of your service
	```ts
	class MockContactsService extends NavigateService {
		constructor() { super(null); }
	}
	```
1. In `beforeEach()`, create an instance of your mock class:
	```ts
	beforeEach(() => {
		mockContactsService = new MockContactsService();
		spyOn(mockContactsService, 'getContacts');
	});
	```
1. `inject()` the `TestComponentBuilder`, override the providers, let the builder instantiate your component and test whether the contacts have been retrieved
	```ts
	it('should retrieve a list of contacts', 
		inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
		tcb.overrideProviders(InviteComponent, [
				provide(ContactsService, { useValue: mockContactsService })
			])
			.createAsync(InviteComponent)
			.then(fixture => {
				expect(mockContactsService.getContacts).toHaveBeenCalled();
			});
	}));
	```

##s Exercise 3: Test your pipe

You have a pipe that transforms a `Contact` to a view-friendly string. Test this.