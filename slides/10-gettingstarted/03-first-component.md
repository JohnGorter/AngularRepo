### Our first component

Create a reusable component, app.component.ts:

```ts
import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: '<h1>My application</h1>'
})
export class AppComponent {

}
```

And on your index.html:

```html
<my-app></my-app>
```