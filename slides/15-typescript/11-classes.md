### Classes

![ts](img/ts-small.png)<!-- .element class="emblem"  -->

A more intuitive, object oriented style classes

```typescript
class Point {
	constructor(public x: number, public y: number) { }

	length(o: Point) {
		const width = this.x - o.x;
		const height = this.y - o.y;
		return Math.sqrt(width * width + height * height);
	}

	static origin = new Point(0, 0);
}

class ColoredPoint extends Point {
	constructor(x: number, y: number, public color: string) {
		super(x, y);
	}
}
```

Relies on prototypal inheritance. <!-- .element class="fragment" -->