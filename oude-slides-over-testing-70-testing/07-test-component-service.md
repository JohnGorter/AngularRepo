### Testing a component that uses a service

When `new`-ing your component, supply a spied on service

```ts
import { beforeEach, describe, expect, it } from '@angular/core/testing';
import { CrudComponent } from './crud.component';
import { NavigateService } from './navigate.service'; 

describe('CrudComponent', () => {
	let navigateService: NavigateService;
	let crudCompoment: CrudComponent;

	beforeEach(() => {
		navigateService = new NavigateService();
		crudCompoment = new CrudComponent(navigateService);
	});

	it('should support navigating to the next item', () => {
		spyOn(navigateService, 'navigateToNextItem');
		crudComponent.nextItem(1);
		expect(navigateService.navigateToNextItem).toHaveBeenCalled();
	});
});
```
<!-- .element: class="stretch" -->