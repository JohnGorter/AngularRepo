### Modules

![es6](img/es6.png)<!-- .element class="emblem"  -->

```typescript
// lib/math.js
export function sum (x, y) {
	return x + y;
};
export let pi = 3.141593;

// someApp.js
import * as math from './lib/math';
console.log('2π = ' + math.sum(math.pi, math.pi));

// otherApp.js
import { sum, pi } from './lib/math';
console.log('2π = ' + sum(pi, pi));
```

* Using `export` or `import` in a file will transform that file in an **external module**
* Declaring variables in an external module *won't* pollute the global scope

---

### A note on modules

* Syntax is in the ECMAScript specification
* <!-- .element class="fragment"-->How a browser retrieves modules is **not**
	* When writing Angular we always need a module loader (SystemJS/webpack)
* An<!-- .element class="fragment"--> `import` can be *relative* or *non-relative*
	* Relative<!-- .element class="fragment"--> import: module name starts with `./` or `../`
		* Always relative to the current file
		* Example: `import * as math from './lib/math';`
	* Non-relative <!-- .element class="fragment"-->import: all other module names
		* Are resolved using the `node_modules` folder (because `moduleResolution` is `node`)
		* Example: `import { Component } from "angular2/core";`