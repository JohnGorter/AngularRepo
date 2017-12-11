### Change detection

![Change detection](img/cd-tree-2.svg) <!-- .element: class="right" -->
Angular uses Zones to get notified of **when something asynchronous has happened** (events, AJAX, timers)

Angular calls goes through the component tree **once from top to bottom** and tells it to update itself

* Data in a view can only come from the associated component
* A unidirectional data flow is more predictable than cycles with dirty checking

image source: <!-- .element: class="source" -->
https://www.sitepoint.com/angular-2-components-inputs-outputs/ <!-- .element: class="source" -->

---

### Change detection internals

* Every component has its own change detector (CD)
* This is generated at runtime for every component, so that the JavaScript engine can perform optimizations

note:
http://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html