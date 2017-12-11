import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable()
export class ContactService {
	contacts: Contact[] = [
		new Contact('Sam', 'Smith', 'sam.smith@music.com'),
		new Contact('Frank', 'Muscles', 'frank@muscles.com'),
		new Contact('Eddy', 'Valentino', 'eddy@valfam.co.uk')
	];

	getContacts() {
		return this.contacts;
	}

	addContact(newContact: Contact) {
		this.contacts.push(newContact);
	}
}