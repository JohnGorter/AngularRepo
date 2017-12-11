### And even AngularJS has issues

* Over time, multiple notations were supported, creating confusion
  * Controllers: `controller` vs `controllerAs`
  * Directives: `compile` vs `link` vs `controller` vs `controllerAs`
  * Injection: retrieve a filter through `$filter` or directly?

```html
<div ng-controller="mainCtrl"></div>
```

```js
angular.module('app').controller('mainCtrl', function($scope) {
    $scope.name = 'Frank';
});
```
vs
```html
<div ng-controller="mainCtrl as main">
```

```js
angular.module('app').controller('mainCtrl', function() {
    this.name = 'Frank';
});
```

---

### ... more issues

* Performance would drop with ~2000 dynamic items
* Does not scale to enterprise big applications
* Does not play nice with other frameworks