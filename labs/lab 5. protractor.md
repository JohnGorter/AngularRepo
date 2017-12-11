# Lab: Protractor

In this lab, we'll use Protractor to end-to-end test that our form is applying form validation correctly to prevent invalid submissions and to allow valid submissions.

Before we start, delete `e2e/app.po.ts` and `e2e/app.e2e-spec.ts`. These files contain example end-to-end tests that don't work anymore.

## Exercise 1: Test invalid submissions

In this exercise we want to test that our form really isn't submittable when invalid entries have been given.

Let's start by making a page object that reflects our page. We want to enter values in the input fields and click the submit button.

1. In `e2e/`, create a `main.po.ts`. Add a class `DatepickerPage` and add the common protractor imports.
    ```ts
    import { browser, element, by } from 'protractor';

    export class MainPage {

    }
    ```
1. Add a method `navigateTo()` to navigate to the main page.
    ```ts
    navigateTo() {
        return browser.get('/');
    }
    ```
1. Add a method `getInputFirstName()`.
    ```ts
    private getInputFirstName() {
        return element(by.id('rfm-firstname'));
    }

    enterFirstName(value) {
        this.getInputFirstName().sendKeys(value);
    }
	```
1. Add similar methods for entering values in the surname and e-mail fields.

1. Add a method for checking whether the submit button is enabled.
    ```ts
    isReactiveFormButtonEnabled() {
        return this.getReactiveFormButton().isEnabled();
    }
    ```
Our object model is all set for now, let's use it in our other file, `e2e/app.e2e-spec.ts`.
1. Create the skeleton of our tests. Start the tests by navigating to our page.
    ```ts
    describe('Main page', () => {
        let page = new MainPage();

        beforeEach(() => {
            page.navigateTo();
        });
    });
    ```
1. Add the first test using the rest of the page object. 
    ```ts
    it('should not submit invalid form entries', () => {
        page.enterFirstName('Hank');
        page.enterSurname('...'); // invalid
        page.enterEmail('h@nk.com');

        expect(page.isReactiveFormButtonEnabled()).toBe(false);
    });
    ```

## Exercuse 2: Test valid submissions

Add another test to test whether the form submits when the form has only valid entries. For this, your page object will have to be expanded with methods for counting the number of contacts in the table and a method for submitting the form. Hint:

```ts
page.getNrOfContacts().then(countBefore => {
    // fill and submit form
    // ...

    // assert
    expect(page.getNrOfContacts()).toBe(countBefore + 1);
});
```