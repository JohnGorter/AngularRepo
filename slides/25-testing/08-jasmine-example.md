### Jasmine - Simple example

```js
describe('SuperHero', () => {             // 'describe' a test suite
    let sut: SuperHero;                   // System under test

    beforeEach(() => {                    // 'beforeEach' hook,
        sut = new SuperHero('Spiderman'); // runs before each test
    });

    describe('when ability', () => {      // You can (and should)
        let result: string;               // nest test suites

        beforeEach(() => {
            result = sut.ability();
        });

        it('should climb walls', () => {  // 'it' specifies a test
            expect(result)                // 'expect' creates a matcher
            .toBe('climb walls'));
        });
    });
});
```

<!-- .element: class="stretch" -->