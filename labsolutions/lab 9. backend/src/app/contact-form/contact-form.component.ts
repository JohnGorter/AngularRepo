import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

function emailValidator(control: AbstractControl) {
	// required validator should handle empty values
	if (!control.value) {
		return null;
	}

	let regex = /^.+@.+\.[a-zA-Z]+$/;
	return regex.test(control.value) ? null : { email: { valid: false } };
}

@Component({
	selector: 'contact-form',
	templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
	newContact: Contact = new Contact('', '', '');
	addContactForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private contactService: ContactService) { }

	ngOnInit() {
		this.addContactForm = this.fb.group({
			firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z -]+$')]],
			surname: ['', [Validators.required, Validators.pattern('^[a-zA-Z -]+$')]],
			email: ['', [Validators.required, emailValidator]]
		});
	}

	addContact(form: FormGroup) {
		this.contactService.addContact(this.newContact);

		this.newContact = new Contact('', '', '');
		form.reset();
	}

	addContactReactive() {
		this.contactService.addContact(this.addContactForm.value);

		this.addContactForm.reset();
	}
}