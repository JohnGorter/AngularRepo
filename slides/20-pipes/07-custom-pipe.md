### Creating a pipe

Simply implement `PipeTransform`

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'greet'
})
export class GreetPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        return `Hey ${value}!`
    }
}
```

Register the pipe with the module for use

```ts
import { GreetPipe } from './greet/index';

@NgModule({
  imports: [...],
  declarations: [..., GreetPipe],
  exports: [..., GreetPipe]
})
export class MyPipesModule {
```

---

### Creating a pipe

Import the module where the pipe resides in

```ts
import { MyPipesModule } from '../my-pipes/my-pipes.module';

@NgModule({
    imports: [..., MyPipesModule],
    declarations: [...],
    exports: [...],
    providers: [...]
})
export class SomeModule { }
```

And use it in the template of a component inside that `SomeModule`

```html
<p>{{myName | greet}}</p>
```