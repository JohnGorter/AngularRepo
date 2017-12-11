### Basics

Decorate a class with `@Injectable()`

```ts
import { Injectable } from '@angular/core';

@Injectable()
export class MagicService {
    doSomethingAmazing() {
        return Math.random();
    }
}
```

Then let Angular know how this service can be provided:

```ts
@NgModule({
	imports: [...],
	declarations: [...],
	providers: [..., PeopleService],
	bootstrap: [...]
})
export class AppModule { }
```

---

### Basics

Now your service is ready to be injected:

```ts
import { Component } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
    selector: 'playground',
    templateUrl: 'playground.component.html'
})
export class PlaygroundComponent {
    constructor(private peopleService: PeopleService) {
        peopleService.doSomethingAmazing();
    }
}
```

Within the module, `PeopleService` is a singleton.