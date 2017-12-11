### Extra tricks you can use to instruct the DI mechanism

---

| **Decorator** | **Purpose** |
|----------|-------------|
| `@Inject()` | Use this to override the token used in the resolution. `@Inject()` without params is implicitly added to every constructor parameter. |
| `@Inject(forwardRef(() => Car))` | Lazy injection, used at runtime in code. This is to solve circular dependencies. This also solves the problem of using a class before it is declared (ES2015 classes are not hoisted)|

---

| **Decorator** | **Purpose** |
|----------|-------------|
| `@Host()` | use any injector up until the closest host (useful for attribute directives) |
| `@Self()` | use only the providers from the current component, nothing from the parent |
| `@SkipSelf()` | use the provider defined in the parent component, not the current component |
| `@Optional()` | the instantiation won't crash if it doesn't find a suitable provider. It will provide `undefined` instead. |

---


### viewProviders vs providers

* `providers`: Everything registered in this array will be available in the component and the child components
* `viewProviders`: Everything registered in this array will be available in the template of the current component.

This means for the following template:

```html
<my-component>
    <!-- this content has access to my-component's providers,
     but not viewProviders. -->
    <some-other-component-as-content />
</my-component>
```