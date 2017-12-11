### Using `async` / `fakeAsync`

* Using `async`
  * All async calls get captured
  * When *all* async calls are done, calls jasmine's `done()` function
* Using `fakeAsync`
  * Like `async`, but let all calls be called synchronously


Bonus question: How can this work? <!-- .element class="fragment" -->