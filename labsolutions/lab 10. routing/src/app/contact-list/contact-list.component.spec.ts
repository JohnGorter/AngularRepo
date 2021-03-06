import { FormsModule } from '@angular/forms';
import { TestBed, inject } from '@angular/core/testing';
import { ContactListComponent } from './contact-list.component';
import { ContactService } from '../services/contact.service';
import { ContactNamePipe } from '../contact-name/contact-name.pipe';
import { ContactServiceMock } from '../mocks/contact.service.mock.spec';
import { MyHoverDirective } from '../my-hover/my-hover.directive';
import { SelectableDirective } from '../selectable/selectable.directive';

describe('Component: ContactList', () => {
	let contactList: ContactListComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule],
			declarations: [
				ContactListComponent,
				ContactNamePipe,
				MyHoverDirective,
				SelectableDirective
			],
			providers: [
				{ provide: ContactService, useClass: ContactServiceMock }
			]
		});
		contactList = TestBed.createComponent(ContactListComponent).componentInstance;
	});

	it('should retrieve contacts during initialization', inject([ContactService], (contactService: ContactService) => {
		contactList.ngOnInit();
		expect(contactService.getContacts).toHaveBeenCalled();
	}));
});