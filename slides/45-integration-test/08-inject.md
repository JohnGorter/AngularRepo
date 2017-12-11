### Inject

* Use the `inject` function to let angular inject parts of your application

```typescript
beforeEach(inject([HeroService], (heroService: HeroService) => {
  spyOn(heroService, 'getHeroes').and.returnValue
    (Promise.resolve([new Hero('Superman'), new Hero('Spiderman')]));
}));
```