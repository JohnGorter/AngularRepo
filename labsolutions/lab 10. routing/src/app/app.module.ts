import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactNamePipe } from './contact-name/contact-name.pipe';
import { ContactService } from './services/contact.service';
import { MyHoverDirective } from './my-hover/my-hover.directive';
import { SelectableDirective } from './selectable/selectable.directive';
import { HomeComponent } from './home.component';
import { routes } from './app.routes';
import { InviteComponent } from './invite.component';

@NgModule({
	declarations: [
		AppComponent,
		ContactFormComponent,
		ContactListComponent,
		ContactNamePipe,
		MyHoverDirective,
		SelectableDirective,
		HomeComponent,
		InviteComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule.forRoot(routes)
	],
	providers: [ContactService],
	bootstrap: [AppComponent]
})
export class AppModule { }
