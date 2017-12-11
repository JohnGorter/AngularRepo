### Jasmine - Test double example

```javascript
let createHero = jasmine.createSpy('createHero');      // Create a spy

createHero.and.returnValue({ name: 'Daredevil'});      // Configure stub behavior

expect(createHero(123)).toEqual({ name: 'Daredevil'}); // Call the method

expect(createHero).toHaveBeenCalledWith(123);          // Verify behavior on the spy

jasmine.createSpyObj('SuperHero', [      // Creates an object with spy/stub methods
    'useAbility', 'attack', 'canFly'
]); 

spyOn(hero, 'useAbility')   // Create a spy method...
  .and.callThrough();       // but still will call the real method
                            // only works in `beforeEach` and `it`.
                            // Will automatically be cleaned-up after the test
```

<!-- .element: class="stretch" -->