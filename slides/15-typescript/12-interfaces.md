### Interfaces

![ts](img/ts-small.png)<!-- .element class="emblem"  -->

* Define the *shape* that a value has
* No runtime equivalent

```typescript
interface Colored {
	color: string;
}

class ColoredPoint extends Point implements Colored  {
	color: string;
}
```

