### Arrow functions

![es6](img/es6.png)<!-- .element class="emblem"  -->

Use arrow functions instead of using the `function` keyword.

```typescript
let sortMod5 = (numbers) => {
	return numbers.filter(num => num %5 === 0);
};

let User = function(name) {
	this.name = name;
	this.filter = (items) => items.filter(item => item.name === this.name);
}; // Lexical `this`

let frank = new User('Frank');
```

Using <!-- .element class="fragment" --> `=>` will *fix* the `this`-pointer

Rule <!-- .element class="fragment" -->of thumb: when in doubt, don't use `function` 