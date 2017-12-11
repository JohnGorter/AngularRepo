import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
	selector: '[selectable]'
})
export class SelectableDirective implements AfterViewInit {
	@Input('selectable') indexes: number[];

	constructor(private el: ElementRef) { }

	ngAfterViewInit() {
		// Place class variables in local variables so handleClick() can access them
		let el = this.el.nativeElement;
		let indexes = this.indexes;

		this.el.nativeElement.querySelector('tbody').addEventListener('DOMSubtreeModified', () => {
			let rows = this.el.nativeElement.querySelectorAll('tbody tr');

			for (let row of rows) {
				// addEventListener() already has a built-in mechanism where duplicate listeners are
				// not registered (http://stackoverflow.com/questions/5824761/does-addeventlistener-and-removeeventlistener-stack).
				// We can't use a () => { } for that though, it has to be the exact same function reference.
				row.addEventListener('click', handleClick);
			}
		});

		function handleClick() {
			// determine index by retrieving all the tr's and checking which one is the tr clicked on.
			// note that querySelectorAll() returns a NodeList, not an array, and doesn't have an indexOf() method.
			let rows = el.querySelectorAll('tbody tr');
			let i = Array.prototype.indexOf.call(rows, this);

			// add if not in array, remove if in array
			let index = indexes.indexOf(i);
			index < 0 ? indexes.push(i) : indexes.splice(index, 1);
		}
	}
}