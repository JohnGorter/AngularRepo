import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TestBed, inject } from '@angular/core/testing';
import { ContactFormComponent } from './contact-form.component';
import { ContactService } from '../services/contact.service';
import { ContactServiceMock } from '../mocks/contact.service.mock';

describe('Component: ContactForm', () => {
	let contactForm: ContactFormComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule, ReactiveFormsModule],
			declarations: [
				ContactFormComponent
			],
			providers: [
				{ provide: ContactService, useClass: ContactServiceMock }
			]
		});
		contactForm = TestBed.createComponent(ContactFormComponent).componentInstance;

		// initialize the form
		contactForm.ngOnInit();
	});

	it('should support adding a new contact', inject([ContactService], (contactService: ContactService) => {
		contactForm.addContactReactive();
		expect(contactService.addContact).toHaveBeenCalled();
	}));
});