import { browser, element, by } from 'protractor';

export class MainPage {
	navigateTo() {
		return browser.get('/');
	}

	private getInputFirstName() {
		return element(by.id('rfm-firstname'));
	}

	private getInputSurname() {
		return element(by.id('rfm-surname'));
	}

	private getInputEmail() {
		return element(by.id('rfm-email'));
	}

	private getReactiveFormButton() {
		return element(by.css('#reactive-form button'));
	}

	enterFirstName(value) {
		this.getInputFirstName().sendKeys(value);
	}

	enterSurname(value) {
		this.getInputSurname().sendKeys(value);
	}

	enterEmail(value) {
		this.getInputEmail().sendKeys(value);
	}

	submitForm() {
		this.getReactiveFormButton().click();
	}

	isReactiveFormButtonEnabled() {
		return this.getReactiveFormButton().isEnabled();
	}

	getNrOfContacts() {
		return element.all(by.css('table tbody tr')).count();
	}
}