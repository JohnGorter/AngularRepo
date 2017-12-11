# Lab: Backend communication

## Pre-exercise: Set up a REST service

1. In the `resource/` folder, there's a `contacts.json` file to boot up a REST service.
1. Open a commandprompt in this folder and execute the following commands

    ```bash
    npm install json-server --global
    json-server .\contacts.json --port 9688
    ```
    This will boot up a REST server you can use during this lab.

## Exercise 1: Retrieve contacts from a REST service

1. Register the `HttpClientModule` with your module. It's in `@angular/common/http`.
1. In your `ContactService`, inject `HttpClient` with the constructor. You can find `HttpClient` in `@angular/common/http` as well.
    ```ts
	private url = 'http://localhost:9688/contacts';

    constructor(private http: HttpClient) { }
    ```

1. Use this `http` when getting the contacts.

    ```ts
	getContacts() {
	    return this.http.get(this.url);
	}
    ```

1. Because `getContacts()` no longer returns an array but an `Observable`, some changes need to be made inside `ContactListComponent`. The call should now look like this:
    ```ts
    ngOnInit() {
	    this.contactService.getContacts().subscribe((contacts: Contact[]) => {
	        this.contacts = contacts;
	    });
    }
    ```

## Exercise 2: More interaction with the REST service

Change the implementations of adding, editing and deleting of contacts to work with the REST service. The `ContactService` should be responsible for all API calls.

You'll probably also run into the problem that you have to requery the list of contacts once a contact has been added. Multiple solutions are possible here and it all depends on which you simply like most.