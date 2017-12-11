## TestBed config example

```javascript
TestBed.configureTestingModule({
  declarations:[ HeroesComponent ], // Declare the HeroesComponent
  providers: [
    HeroService,
    {
      provide: Router,              // Configure the HeroService and
      useValue: mockRouter          // a mock Router to be injectable
    }
  ],
  imports: [HttpModule],            // Import additional HttpModule
  schemas: [NO_ERRORS_SCHEMA]       // Let angular ignore unknown elements
});

TestBed.overrideComponent(/*...*/); // Override specific parts 
TestBed.overrideModule(/*...*/);    // of the test module
TestBed.overridePipe(/*...*/);
TestBed.overrideDirective(/*...*/);
```