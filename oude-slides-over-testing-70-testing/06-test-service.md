### Testing a service

* Import your service
* Import Jasmine functions
* Simply `new` your component and test away

```ts
import { beforeEach, describe, expect, it } from '@angular/core/testing';
import { NavigateService } from './navigate.service';

describe('NavigateService', () => {
	let navigateService: NavigateService;
	let data: any[];
	beforeEach(() => {
		navigateService = new NavigateService();
		data = [{ q: 'e' }, { q: 'w' }];
	});

	it('should support navigating to the first item', () => {
		navigateService.navigateToFirstItem(data);
		expect(data[0].isHighlighted).toBe(true);
	});
});
```