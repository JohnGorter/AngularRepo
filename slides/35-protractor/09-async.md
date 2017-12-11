### Protractor is async

```html
<h2>Superheroes</h2>
```

```typescript
let title = element(by.css('h2')).getText();

expect(title).toBe('Superheroes') // works!

expect(title === 'Superheroes').toBe(true); // breaks!
```

<ul class="fragment">
  <li>All commands must be sent over the wire to the browser</li>
  <li>Each Protractor method in a spec is just:
    <ul>
      <li>Queuing up a command</li>
      <li>Returning a promise</li>
    </ul>
  </li>
  <li>Jasmine's `expect`, `beforeEach` and `it` have been adapted</li>
  <li>Control flow requires dealing with promises</li>
</ul>