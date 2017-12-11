### Solving it with async / fakeAsync

```typescript
import { fakeAsync, async, tick } from '@angular/core/testing';

it('should run async', async(() => {
    const p = new Promise(res => setTimeout(() => res(42)));
    p.then(num => expect(num).toBe(0));
}));

it('should run async', fakeAsync(() => {
    let val = 0;
    setTimeout(() => val = 42, 100);
    setTimeout(() => val = 0, 200);
    tick(100);
    expect(val).toBe(42);
    tick(100);
    expect(val).toBe(0);
}));
```

```bash
Executed 2 of 2 (1 FAILED) (0.015 secs / 0.006 secs)
```
<!--.element class="fragment"-->
