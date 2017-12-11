### Dependency injection with testing

* So far, we've been instantiating our components as well as their dependencies
  * If a component has 11 dependencies, that's gonna be a lot of work
* A better way: Use dependency injection in tests
  * There's a `TestComponentBuilder` to build your component
  * On this `TestComponentBuilder`, configure the providers to override with some sort of fake implementation
  * Create the component and test away

---

### Dependency injection with testing

```ts
import { provide } from '@angular/core';
import { beforeEach, describe, expect, it, inject } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import { CrudComponent } from './crud.component';
import { NavigateService } from './navigate.service';

class MockNavigateService extends NavigateService {}

describe('CrudComponent', () => {
	let mockNavigateService: NavigateService;

	beforeEach(() => {
		mockNavigateService = new MockNavigateService();
		spyOn(mockNavigateService, 'navigateToNextItem');
	});

	it('should support navigating to the next item', 
		inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
		tcb.overrideProviders(CrudComponent, [
				provide(NavigateService, { useValue: mockNavigateService })
			])
			.createAsync(CrudComponent)
			.then(fixture => {
				fixture.componentInstance.nextItem();
				expect(navigateService.navigateToNextItem).toHaveBeenCalled();
			});
	}));
});
```
<!-- .element: class="stretch" style="font-size: 0.45em" -->