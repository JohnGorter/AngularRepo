### Internationalization

You can configure this API in your module

```ts
import { NgModule, LOCALE_ID } from '@angular/core';

@NgModule({
	imports: [...],
	declarations: [...],
	providers: [
		{
			provide: LOCALE_ID,
			useValue: 'nl-NL'
		},
		...
	],
	bootstrap: []
})
export class AppModule { }
```