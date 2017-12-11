### AsyncPipe

* A pipe that deals with observables/promises
* Expose the observable

```ts
peopleObservable: Observable<string>;
constructor(private http: Http) {
    this.peopleObservable = this.http
        .get('app/people')
        .map(p => p.data.map(person => person.name));
}
```
* Use in your HTML:

```html
<p>Names: {{peopleObservable | async | greetAll}}</p>
```