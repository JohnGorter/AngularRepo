### String interpolation

![es6](img/es6.png)<!-- .element class="emblem"  -->

Multiline string interpolation using back ticks ` ` `

```typescript
let aValue: 'some string';
let n = `Code example:
  string a = '${aValue}';`;

console.log(n);
/*
Code example:
  string a = 'some string';
*/
```