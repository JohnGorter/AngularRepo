import { Contact } from '../models/contact';

export class ContactServiceMock {
    constructor() {
        spyOn(this, 'getContacts').and.returnValue([]);
        spyOn(this, 'addContact');
    }

    getContacts() { }

    addContact(newContact: Contact) { }
}