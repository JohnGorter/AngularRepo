import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactNamePipe } from './contact-name.pipe';

@NgModule({
	declarations: [
		AppComponent,
		ContactNamePipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }