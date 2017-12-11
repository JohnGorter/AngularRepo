### Dealing with asynchronousity

* What happens here?

```typescript
it('should run async', () => {
    const p = new Promise(res => {
        setTimeout(() => res(42));
    });
    p.then(num => expect(num).toBe(0));
});
```

```bash
Executed 1 of 1 SUCCESS (0.015 secs / 0.006 secs)
```
<!--.element class="fragment"-->

