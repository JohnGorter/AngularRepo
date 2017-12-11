### Testing a component

* Import your component
* Import Jasmine functions
* Simply `new` your component and test away

```ts
import { beforeEach, describe, expect, it } from '@angular/core/testing';
import { CrudComponent } from './crud.component'; 

describe('CrudComponent', () => {
	let crudCompoment: CrudComponent;
	beforeEach(() => {
		crudCompoment = new CrudComponent();
	});
	it('should support editing an item', () => {
		crudComponent.data = [
			{ q: 'e' },
			{ q: 'w' }
		];
		crudComponent.edit(1);
		expect(crudComponent.data[1].editing).toBe(true);
	});
});
```