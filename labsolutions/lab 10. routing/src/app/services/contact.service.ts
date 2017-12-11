import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class ContactService {
	private url = 'http://localhost:9688/contacts';

	constructor(private http: HttpClient) { }

	private contactObservable: Observable<Contact[]>;
	private contactSubscriber: Subscriber<Contact[]>;

	getContacts() {
		// we're creating a custom observable once here so when adding, editing or 
		// deleting contacts, we can use this same observable to notify subscribers
		// of changes.
		if (!this.contactObservable) {
			this.contactObservable = Observable.create(cs => {
				this.contactSubscriber = cs;
			});
		}

		this.http.get(this.url).subscribe((contacts: Contact[]) => {
			this.contactSubscriber.next(contacts);
		});

		return this.contactObservable;
	}

	addContact(newContact: Contact) {
		// this REST-services returns the updated contact (id has been added).
		// we're simply adding it to the local array here, but you can also 
		// do a new HTTP call where you retrieve a full list of contacts.
		// this does place more load on your server and it costs a bit more time,
		// but the data is then fully in sync with the server. All up to you.
		this.http.post(this.url, newContact).subscribe(() => this.getContacts());
	}

	deleteContact(contact: Contact) {
		this.http.delete(`${this.url}/${contact.id}`).subscribe(() => this.getContacts());
	}
}