import { ContactNamePipe } from './contact-name.pipe';
import { Contact } from './contact';

describe('Pipe: ContactName', () => {
	let contactNamePipe: ContactNamePipe;

	beforeEach(() => {
		contactNamePipe = new ContactNamePipe();
	});

	it('should concatenate a contact name', () => {
		let c = new Contact('John', 'Fish', 'q@q.nl');
		expect(contactNamePipe.transform(c, undefined)).toBe('John Fish');
	});

	it('should handle undefined gracefully', () => {
		expect(contactNamePipe.transform(undefined, undefined)).toBe(undefined);
	});
});