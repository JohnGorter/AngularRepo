### Change detection strategy

For performance reasons, it is possible to exclude a component from the change detection cycle.

```ts
@Component({
    templateUrl: 'some.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SomeComponent implements DoCheck {
    @Input() data;
    private previousLength = 0;

    constructor(private cdr: ChangeDetectorRef) { }

    ngDoCheck() {
        if (this.data.length !== this.previousLength) {
            this.previousLength = this.data.length;
            this.cdr.markForCheck();
        }
    }
}
```