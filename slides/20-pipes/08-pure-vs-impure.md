### Pure vs impure pipes

`@Pipe` has a `pure` property:
```ts
@Pipe({
	name: 'my',
	pure: false // boolean
})
export class MyPipe implements PipeTransform {
```

Pure pipes:
* Are the default, most (custom) pipes are pure 
* Get called when the input value has changed

Impure pipes:
* Get called for every time change detection gets triggered
* Can drain performance quickly