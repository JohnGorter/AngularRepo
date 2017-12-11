### Component fixture

Access to the component, its DOM and change detection

* **componentInstance** - the actual component
* **debugElement** - provides insight into the component and its DOM element
* **nativeElement** - the associated DOM element
* **detectChanges()** - trigger a change detection cycle
* **autoDetectChanges()** - specify to automatically run changeDetection *sometimes*
* **whenStable()** - returns a promise that resolves when the fixture is stable
