### AngularJS and Angular differences

| Feature | AngularJS | Angular |
|---------------------------------|
| Change detection | Dirty checking (digest cycle) | Zones |
| Dependency injection | Parameter names | Parameter types |
| Forms | `name` exposed metadata | ngForm, ngControl, #trvs |
| Events | `$broadcast()` and `$emit()` on `$scope` | @Input() and @Output() |
| Data formatting | Filters | Pipes |