### Jasmine

With Jasmine, you **describe** what **it** should do

```ts
describe('CustomerService', () => {
	it('should save customers', () => {

	});
});
``` 

**Expect** that **it** actually does it


```ts
describe('CustomerService', () => {
	it('should save customers', () => {
		expect('some text').toBe('some text');
		expect('some text').not.toBeNull();
		expect('some text').toBeTruthy();
		expect(myObj).toEqual(myOtherObject);
	});
});
```

---

### Jasmine

Execute some code **before/after each** test

```ts
describe('CustomerService', () => {
	beforeEach(() => {
		// Perform initialization
	});

	afterEach(() => {
		// Perform cleanup
	});
});
```

---

### Jasmine

You can spy on functions

```ts
var customerService = {
	getCustomers: () => {
		// calls webserver
	};
};
spyOn(customerService, 'getCustomers');

// call some component that uses this object 
customerService.getCustomers();

expect(customerService.getCustomers).toHaveBeenCalled();
```