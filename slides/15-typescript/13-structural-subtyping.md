### Structural subtyping

![ts](img/ts-small.png)<!-- .element class="emblem"  -->

Sometimes called *duck typing*

> If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck

<!-- .element style="zoom: 0.5"  -->

```typescript
interface Named {
	name: string;
}
class Person {
	constructor(public name: string) { }
}

let p: Named = new Person('Frank');

const getName = (named: { name: string }) => named.name;
const pName = getName(p);
```