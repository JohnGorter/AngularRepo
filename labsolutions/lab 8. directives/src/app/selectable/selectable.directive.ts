import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
	selector: '[selectable]'
})
export class SelectableDirective implements AfterViewInit {
	@Input('selectable') indexes: number[];

	constructor(private el: ElementRef) {

	}

	ngAfterViewInit() {
		let rows = this.el.nativeElement.querySelectorAll('tbody tr');

		for(let i = 0; i < rows.length; i++) {
			rows[i].addEventListener('click', () => {
				// add if not in array, remove if in array
				let index = this.indexes.indexOf(i);
				index < 0 ? this.indexes.push(i) : this.indexes.splice(index, 1);
			});
		}
	}
}