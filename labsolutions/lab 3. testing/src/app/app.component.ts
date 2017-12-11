import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	newContact: Contact = new Contact('', '', '');

	contacts: Contact[] = [
		new Contact('Sam', 'Smith', 'sam.smith@music.com'),
		new Contact('Frank', 'Muscles', 'frank@muscles.com'),
		new Contact('Eddy', 'Valentino', 'eddy@valfam.co.uk')
	];

	addContact() {
		this.contacts.push(this.newContact);
		this.newContact = new Contact('', '', '');
	}

	editContact(contact: Contact) {
		contact.editing = true;
	}

	saveContact(contact: Contact) {
		contact.editing = false;
	}

	deleteContact(contact: Contact) {
		let index = this.contacts.indexOf(contact);
		this.contacts.splice(index, 1);
	}
}