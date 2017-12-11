### Collaborating components: Shopping cart

```ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'shopping-cart'
	templateUrl: 'shopping-cart.component.html'
})
export class ShoppingCartComponent {
	@Output() contentChange = new EventEmitter();
	@Output() pay = new EventEmitter();

	addItemToCart() {
		contentChange.emit({ type: 'add', item: this.item });
	}
}
```

Using this component:

```html
<shopping-cart
    (pay)="doSomthingWithPayEvent()" 
	(contentChange)="doSomethingWithContent($event)"></shopping-cart>
```