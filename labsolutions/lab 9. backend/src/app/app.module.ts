import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactNamePipe } from './contact-name/contact-name.pipe';
import { ContactService } from './services/contact.service';
import { MyHoverDirective } from './my-hover/my-hover.directive';
import { SelectableDirective } from './selectable/selectable.directive';

@NgModule({
	declarations: [
		AppComponent,
		ContactFormComponent,
		ContactListComponent,
		ContactNamePipe,
		MyHoverDirective,
		SelectableDirective
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [ContactService],
	bootstrap: [AppComponent]
})
export class AppModule { }
