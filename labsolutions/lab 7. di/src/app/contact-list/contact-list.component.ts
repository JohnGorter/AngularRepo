import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
	selector: 'contact-list',
	templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
	contacts: Contact[];

	constructor(private contactService: ContactService) { }

	ngOnInit() {
		this.contacts = this.contactService.getContacts();
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