### Isolating unit tests

* Only test the unit and not its dependents or dependencies
* Use *Test Doubles* to isolate dependencies
  * **Dummies**: are passed around but never actually used.
  * **Spies**: record information about calls
  * **Stubs**: provide canned answers to calls made during the test
  * **Mocks**: pre-configured with details of the calls they expect

  Jasmine uses a combination of spies and stubs <!-- .element class="fragment" -->