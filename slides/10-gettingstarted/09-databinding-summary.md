### Data binding summary

| Data direction	  | Syntax	          |
| ------------------| ------------------|
| One-way <br>From data<br> to view           | `{{expression}}`<br>`[target]="expression"`<br>`bind-target="expression"`  |
| One-way <br>from view<br>to data | `(target)="statement"`<br>`on-target="statement` |
| Two-way  | `[(target)]="expression"`<br>`bindon-target="expression` |

---

### Additional binding types

One-way, from data to view binding types

| Type      | Target                                       | Examples                                                      |
|-----------|----------------------------------------------|---------------------------------------------------------------|
| Property  | Native element, other component or directive | `<img [src]="imageUrl"> <edit-user [user]="currentUser">`     |
| Class     | `className` property                         | `<li [class.selected]="selected"><a>New item</a></li>`        |
| Style     | `style` property                             | `<button [style.background] = "isWarning ? 'red' : 'green'">` |
| Attribute | Attribute (directly)                         | `<button [attr.aria-label]="help"></button>`                  |

<!-- .element: style="zoom: 0.5" -->
