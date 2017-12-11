### Attribute directives

Attribute directives change the appearance or behavior of an element, e.g. `ngStyle` and `ngClass`

Note however:
* selector qualifier is set to '[myattribute]'
* Use `@HostListener()` to register for events
* `ElementRef` can be dependency injected to access the actual DOM element
* `@Input()` is used to set values

---

###  Example attribute directive

```ts
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[attract]' })
export class AttractDirective {
    @Input('attract') bgcolor: string;

    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
      this.el.nativeElement.style.backgroundColor = this.bgcolor;
    }
    @HostListener('mouseleave') onMouseLeave() {
      this.el.nativeElement.style.backgroundColor = null;
    }
}
```

---

### Example Attribute Directive (2)

Used like

```ts
import { Component } from '@angular/core';
import { AttractDirective } from './attract.directive';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent { }
```

```html
<h1>A simple directive</h1>
<p [attract]="'red'">Highlight me!</p>
```

note: Merk op dat hier een aantal dingen gebeuren: 
1. we knopen een attract directive aan een p
2. we binden een string aan de attract directive (directive binding)
3. We gebruiken een selector met [] om een attribuut aan te geven
4. We definieren een @input voor de directive naam zelf voor de kleurtoekenning
5. we gebruiken hostlisteners op de gekoppelde p om te luisteren naar en reageren op 
events
6. We laten de p element injecteren met een elementRef injectable, hiermee krijgen we
de p waarop het attribute gekoppeld staat. 

