### Variable declaration

![es6](img/es6.png)<!-- .element class="emblem"  -->

* `let` declares a block-scoped variable
* `const` declares a readonly variable

```TypeScript
const a = 3;
a = 4; // Error, readonly property

for (let i = 0; i < b.length; i++) {
	let y = b[i];
}
console.log(y); // Error, cannot find name 'y'

let callbacks = [];
for (let i = 0; i <= 2; i++) {
	callbacks[i] = function () { return i * 2; };
}

callbacks[0]() === 0;
callbacks[2]() === 4;
```

Always use `const` or `let` instead of `var`