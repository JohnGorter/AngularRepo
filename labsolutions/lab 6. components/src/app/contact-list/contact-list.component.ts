import { Component, Input } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
	selector: 'contact-list',
	templateUrl: './contact-list.component.html'
})
export class ContactListComponent {
	@Input() contacts: Contact[];

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