import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact';

@Pipe({
	name: 'contactName'
})
export class ContactNamePipe implements PipeTransform {
	transform(contact: Contact, args: any[]): any {
		if (!contact) {
			return contact;
		}
		return `${contact.firstName} ${contact.surname}`;
	}
}