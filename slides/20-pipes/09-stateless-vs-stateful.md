### Stateless vs stateful pipes

* Stateless pipes transforms a to b without side-effects
  * Most (custom) pipes are stateless
* Stateful pipes can manage state and should be used cautiously
  * `AsyncPipe` is the only out-of-the-box stateful pipe