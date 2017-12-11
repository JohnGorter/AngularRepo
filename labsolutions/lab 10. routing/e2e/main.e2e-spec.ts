import { MainPage } from './main.po';

describe('Main page', () => {
	let page = new MainPage();

	beforeEach(() => {
		page.navigateTo();
	});

	it('should not submit invalid form entries', () => {
		page.enterFirstName('Hank');
		page.enterSurname('...'); // invalid
		page.enterEmail('h@nk.com');

		expect(page.isReactiveFormButtonEnabled()).toBe(false);
	});

	it('should submit valid form entries', () => {
		page.getNrOfContacts().then(countBefore => {
			page.enterFirstName('Hank');
			page.enterSurname('Knot');
			page.enterEmail('h@nk.com');
			page.submitForm();

			expect(page.getNrOfContacts()).toBe(countBefore + 1);
		});
	});
});