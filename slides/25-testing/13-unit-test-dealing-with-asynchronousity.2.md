### Solving it with plain Jasmine

```typescript
it('should run async', (done) => {
    const p = new Promise(res => setTimeout(() => res(42)));
    p.then(num => {
        expect(num).toBe(0);
        done();
    });
});
```

```bash
Executed 1 of 1 (1 FAILED) (0.015 secs / 0.006 secs)
```
<!--.element class="fragment"-->

<!--.element class="fragment"--> Using `done()` can be tedious, what if you forget to call it?