import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact';

@Pipe({
	name: 'contactName'
})
export class ContactNamePipe implements PipeTransform {
	transform(contact: Contact, args: any[]): any {
		return `${contact.firstName} ${contact.surname}`;
	}
}