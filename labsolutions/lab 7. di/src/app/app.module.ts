import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactNamePipe } from './contact-name/contact-name.pipe';
import { ContactService } from './services/contact.service';

@NgModule({
	declarations: [
		AppComponent,
		ContactFormComponent,
		ContactListComponent,
		ContactNamePipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [ContactService],
	bootstrap: [AppComponent]
})
export class AppModule { }
