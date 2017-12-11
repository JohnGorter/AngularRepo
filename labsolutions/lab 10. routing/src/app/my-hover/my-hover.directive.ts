import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
	selector: '[myHover]'
})
export class MyHoverDirective implements AfterViewInit {
	@Input('myHover') color;

	constructor(private el: ElementRef) {

	}

	ngAfterViewInit() {
		let rows = this.el.nativeElement.querySelectorAll('tbody tr');

		for(let row of rows) {
			row.addEventListener('mouseover', () => { row.style.backgroundColor = this.color });
			row.addEventListener('mouseout', () => { row.style.backgroundColor = 'transparent' });
		}
	}
}