# Lab: Directives

## Excercise 1. Selecting contacts

The contactlist is a very boring list. Wouldn't it be nice to support row highlighting when you hover over a contact in this list? Create an attribute directive that implements this. 

In the end, you should be able to use this attribute binding in the following manner:

```html
<table>
  <tr *ngFor="..." myHover="lightgray">Contact</tr>
</table>
```

Implement this directive.

## Exercise 2: Hover for the entire table

Our previous implementation would cause the `myHover` attribute to be instantiated for every row. This would be a better way of doing it:

```html
<table myHover="lightgray">
  <tr *ngFor="...">Contact</tr>
</table>
```

Implement that.

## Challenge: Selectable

It would be nice to have a `selectable` attribute directive that lets the user click on rows and then perform some sort of action on those rows, such as delete them. The `selectable` attribute should write the selected row indexes to a `selectedRows` variable on the surrounding component.

```html
<table [selectable]="selectedRows">
  <tr *ngFor="...">Contact</tr>
</table>
<button (click)="deleteAll()">Delete all contacts</button>
```