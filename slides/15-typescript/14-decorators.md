### Decorators

![ts](img/ts-small.png)<!-- .element class="emblem"  -->

Decorators can be used to add functionality at runtime

```typescript
@Component({
	selector: 'my-app',
	template: `<h1>My application</h1>`
})
class MyAppComponent { }
```

Within Angular, they are mostly used for dependency injection using reflection.

```typescript
console.log(Reflect.getOwnMetadata('annotations', AppComponent)[0].selector);
// 'my-app'
```