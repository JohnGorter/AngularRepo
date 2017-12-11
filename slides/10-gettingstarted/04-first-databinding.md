### Showing some data with databinding

```ts
import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html'
})
export class AppComponent {
	title: string = 'My awesome web app';
}
```

app.component.html:

```html
<h1>{{title}}</h1>
```

---

### Bind data straight to DOM properties

```ts
import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html'
})
export class AppComponent {
	isVisible = false;
	imageLocation = 'https://angular.io/img/images/logos/angular2/angular.svg';
}
```

app.component.html:

```html
<p [hidden]="isVisible">Hidden title</h1>
<p [hidden]="!isVisible">Shown title</h1>

<img [src]="imageLocation">
```