### Dealing with promises

Sometimes you'll need to manually deal with promisses.

```typescript
it('should display the right number of heroes on the page', () => {
	const myHeroes = [{ id: 'superman' }, { id: 'spiderman' }];
	const promises = myHeroes.map((myHero) => {
		element(by.id(myHero.id)).isPresent();
	});
	protractor.promise.all(promises).then((isPresentValues) => {
		isPresentValues.forEach((presentValue) => {
			expect(presentValue).toBeTruthy();
		});
	});
});
```