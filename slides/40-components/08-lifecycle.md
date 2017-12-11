### Component lifecycle hooks

![Component lifecycle hooks](img/component-lifecycle-hooks.png)

---

| **Hook** | **Purpose** |
|----------|-------------|
| ngOnInit | Initialize the component after Angular initializes the data-bound input properties |
| ngOnChanges | Respond after Angular sets a data-bound input property |
| ngDoCheck | Detect and act upon changes that Angular doesn't detect on its own |
| ngOnDestroy | Cleanup just before Angular destroys the directive/component. Unsubscribe observables and detach event handlers |

---

| **Hook** | **Purpose** |
|----------|-------------|
| ngAfterContentInit | Respond after Angular projects external content into the component's view. (see `<ng-content>`) |
| ngAfterContentChecked | Respond after Angular checks the content projected into the component. (see `<ng-content>`)|
| ngAfterViewInit | Respond after Angular initializes the component's views and child views |
| ngAfterViewChecked | Respond after Angular checks the component's views and child views. |

---

<video controls="" loop="">
      <source src="/img/cp.webm" type="video/webm">
      Your browser does not support the video tag.
</video>

source: <!-- .element: class="source" -->
http://myrighttocode.org/blog/typescript/angular2/angular-2-lifecycle <!-- .element: class="source" -->
