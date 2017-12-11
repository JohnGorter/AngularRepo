### So, what are they?

Directives are:
* Components without a view
* Can be based on attributes and templates

Attribute directives work on attributes

Structural directives are based on templates in HTML5

---

### Directive selectors
Selectors for directives may be

| Type                 | Purpose                                                    |
|----------------------|------------------------------------------------------------|
| element-name         | select by element name                                     |
| .class               | select by class name                                       |
| [attribute]          | select by attribute name and value                         |
| [attribute=value]    | select only if the element does not match the sub_selector |
| :not(sub_selector)   | select only if the element does not match the sub_selector |
| selector1, selector2 | select if either selector1 or selector2 matches            |

<!-- .element: style="zoom: 0.75" -->