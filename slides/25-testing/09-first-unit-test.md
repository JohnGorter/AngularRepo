### Our first unit test

```typescript
// greet.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ /*...*/ })
export class GreetPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        return `Hey ${value}!`;
    }
}
```

---

### Testing the pipe

```typescript
// greet.pipe.spec.ts
import { GreetPipe } from './greet.pipe.ts';

describe('GreetPipe', () => {
    let sut: GreetPipe;

    beforeEach(() => sut = new GreetPipe());

    describe('transform', () => {
        it('should return "hey Frank"! when called with "Frank"', () => {
            const actual = sut.transform('Frank');
            expect(actual).toBe('Hey Frank!');
        });
    });
});
```
