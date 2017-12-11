import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
	selector: 'contact-list',
	templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
	contacts: Contact[];
	selected: number[] = [];

	constructor(private contactService: ContactService) { }

	ngOnInit() {
		this.contactService.getContacts().subscribe((contacts: Contact[]) => {
			this.contacts = contacts;
		});
	}

	// When selecting rows, ngOnChanges does not get called because the reference to the array 
	// doesn't change, only the content. Use ngDoCheck and possibly combine it with manually addressing  
	// change detection
	previousNumberOfIndexes = 0;
	ngDoCheck() {
		if (this.selected.length !== this.previousNumberOfIndexes) {
			console.log('List of indexes has changed:', this.selected);
			this.previousNumberOfIndexes = this.selected.length;
		}
	}

	editContact(contact: Contact) {
		contact.editing = true;
	}

	saveContact(contact: Contact) {
		contact.editing = false;
	}

	deleteContact(contact: Contact) {
		this.contactService.deleteContact(contact);
	}
}