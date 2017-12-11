### Structural Directives

Structural directives change the DOM layout (adding/removing)
Examples: `*ngIf`, `*ngSwitch`, `*ngFor`

* The asterisk is used to mark the use of the template `*ngIf`
* `TemplateRef<>` injectable refers to template element
* `ViewContainerRef` injectable refers to containing element
* `createEmbeddedView()` method injects template into container

A bit more about templates and angular

---

### Templates 
In HTML5, templates are
> The HTML template element is a mechanism for holding client-side 
> content that is not to be rendered when a page is loaded but may 
> subsequently be instantiated during runtime using JavaScript. 

---

### Templates and Angular
Difference in template processing 
* Outside of an Angular app, the `<template>` tag's CSS `display` property is `none`. 
* Inside of an app, Angular replaces the `<template>` tags and their children with empty `<script>` tags

---

### Templates and Angular
This code

```ts
<p *ngIf="condition">
  content here
</p>
```

Gets desugared into

```ts
<template [ngIf]="condition">
  <p>
    content here
  </p>
</template>
```

---

### Templates and Angular
And this code
```ts
<div *ngFor="let hero of heroes">{{ hero }}</div>
```
Gets desugared into
```ts
<template ngFor let-hero [ngForOf]="heroes">
  <div>{{ hero }}</div>
</template>
```

Notice the expansion of the attribute directives

---

### Example Structural Directive
```ts
import { Directive, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[myUnless]' })
export class UnlessDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }
  @Input() set myUnless(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
```

note: We'll need access to the template and something that can render its contents. 
We access the template with a TemplateRef. The renderer is a ViewContainerRef. 
We inject both into our constructor as private variables

---

### Example Structural Directive(2)
Used like

```ts
import { Component } from '@angular/core';
import { UnlessDirective } from './unless.directive';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  directives: [UnlessDirective]
})
export class AppComponent { }
```

```html
<p *myUnless="condition">
  condition is true and ngMyIf is true.
</p>
```




