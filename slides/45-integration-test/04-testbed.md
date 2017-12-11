### TestBed

* Configure a temporary `NgModule` for testing

```typescript
import { TestBed, ComponentFixture } from '@angular/core/testing';
TestBed.configureTestingModule({
  declarations: [ AppComponent ],
  imports: [ ... ],
  providers: [ ... ],
  schemas: [ ... ]
});
```

* **declarations** Declare the components in the test module
* **imports** Import additional modules used by the components (or child components)
* **providers** Add/override providers used for instantiating the components
* **schemas** Define what elements and attributes to allow in the templates
