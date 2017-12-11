### An example

```typescript
beforeEach(() => {
  let mockRouter = jasmine.createSpyObj('router', ['navigate']);
  TestBed.configureTestingModule({
    declarations: [HeroesComponent],
    providers: [
      HeroService,
      { provide: Router, useValue: mockRouter }
    ],
    imports: [HttpModule],
    schemas: [NO_ERRORS_SCHEMA]
  });
});

describe('when HeroService returns 2 heroes', () => {

  beforeEach(inject([HeroService], (heroService: HeroService) => {
    spyOn(heroService, 'getHeroes').and.returnValue(Promise.resolve([
        new Hero('Superman'), new Hero('Spiderman')]));
  }));

  it('should render 2 heroes', async(() => {
    let fixture = TestBed.createComponent(HeroesComponent)
    fixture.autoDetectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.nativeElement.querySelectorAll('li').length).toBe(2);
    });
  }));
});
```