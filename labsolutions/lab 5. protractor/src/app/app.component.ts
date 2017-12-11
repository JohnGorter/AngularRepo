import { Component } from '@angular/core';
import { Contact } from './contact';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

function emailValidator(control: AbstractControl) {
	// required validator should handle empty values
	if (!control.value) {
		return null;
	}

	let regex = /^.+@.+\.[a-zA-Z]+$/;
	return regex.test(control.value) ? null : { email: { valid: false } };
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	newContact: Contact = new Contact('', '', '');

	addContactForm: FormGroup;

	contacts: Contact[] = [
		new Contact('Sam', 'Smith', 'sam.smith@music.com'),
		new Contact('Frank', 'Muscles', 'frank@muscles.com'),
		new Contact('Eddy', 'Valentino', 'eddy@valfam.co.uk')
	];

	constructor(private fb: FormBuilder) {
		this.addContactForm = this.fb.group({
			firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z -]+$')]],
			surname: ['', [Validators.required, Validators.pattern('^[a-zA-Z -]+$')]],
			email: ['', [Validators.required, emailValidator]]
		});
	}

	addContact(form: FormGroup) {
		this.contacts.push(this.newContact);
		this.newContact = new Contact('', '', '');
		form.reset();
	}

	addContactReactive() {
		this.contacts.push(this.addContactForm.value);
		this.addContactForm.reset();
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