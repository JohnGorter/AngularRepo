### Types

![ts](img/ts-small.png)<!-- .element class="emblem"  -->

* Use `:` to add optional type annotations
* Build-in types: `string`, `number`, `boolean`, `Array<T>`

```typescript
let name: string = 'Frank';

function add(x: number, y: number): number {
	return x + y;
}

let list: number[] = [2, 4, 5]; // Synonym: Array<number>

let isEven: (n: number) => boolean = (n: number) => n % 2 === 0;

name = true;   // Error: Type 'boolean' is not assignable to type 'string'
list = isEven; // Error: Type '(n: number: => boolean)'
               //   is not assignable to type 'number[]'
```

Above type annotations can all be inferred by TypeScript (except for parameter types) <!-- .element class="fragment" -->
