export class Contact {
	id: number;

	editing?: boolean;

	constructor(public firstName: string, public surname: string, public email: string) {

	}
}