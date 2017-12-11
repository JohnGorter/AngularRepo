### Usage

They modeled Protractor after jasmine

```typescript
// Import stuff from protractor
import { browser, element, by } from 'protractor';

describe('Home page', () => {
	beforeEach(() => {
		// Tell the browser to retrieve page `''`
		browser.get('');
	});

	it('should display the page title', () => {
		// Use `element` and `by` to select elements on a page
		const title = element(by.css('app-root h2')).getText();
		expect(title).toBe('Welcome to the app'));
	});
});
```

<!--.element class="fragment" --> **Question:** What do you think of this example?

---

### Using Protractor with page objects

```typescript
// homePage.uitest.ts
import { HomePage } from './page-objects/home-page';

describe('Home page (using Page Object)', () => {

	beforeEach(() => {
		const homePage = new HomePage();
		homePage.get();
	});

	it('should display the page title', () => {
		expect(homePage.title()).toBe('Welcome to the app');
	});
});
```

```typescript
// pageObjects/home-page.ts
import { browser, element, by } from 'protractor';

export class HomePage {
	get() { browser.get(''); }
	title() {
		return element(by.css('app-root h2')).getText();
	}
}
```

