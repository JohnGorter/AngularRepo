### What about promises?

* In web development land thus far, promises are the popular choice for backend calls
* Working with promises is still possible:

```ts
this.http
    .get('api/people')
    .toPromise()
    .then(people => {
        this.people = people;
    });
```

---

### Promises vs Observables
**Promises**
* Are eager. Whether someone is awaiting the result or not, a promise starts doing the asynchronous work.
* Do their job once, resolving with one result.

**Observables**
* Are lazy. An observable doesn't start until a subscriber is present.
* Can be cancelled. An Observable can return a dispose function.  
* Is not limited to one result. Ideal for Web Sockets.
  * Observables can be seen as a stream of results published by some source.