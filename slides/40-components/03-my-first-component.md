### My first component

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'hello-world',
    template: 'My first component says: {{message}}'
})
export class HelloWorldComponent {
    @Input() message: string = 'Hello world';
}
```

Use this component:

```html
<hello-world></hello-world>
```