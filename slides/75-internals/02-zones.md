### Zones

> It's open-heart surgery on the web browser
Mi&scaron;ko Hevery

---

### A zone

* Is an execution context for asynchronous operations
* Keeps track of tasks by hooking into `setTimeout()`, `setInterval()`, etc.
* Let's you know how long a tasks takes
* Gives detailed stacktraces when something goes wrong
* Is a native Dart feature
* Has been [proposed as a JavaScript feature](https://github.com/tc39/tc39-notes/blob/master/es7/2016-01/2016-01-26.md#5i-zones)
  * And until that time, we do it manually with [Zone.js](https://github.com/angular/zone.js/)

---

### Angular and zones

* Zones are used by Angular to keep track of asynchronous tasks
* Angular exposes a custom zone: `NgZone`


