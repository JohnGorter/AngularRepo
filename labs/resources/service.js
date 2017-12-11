// Init
var restify = require('restify');
var server = restify.createServer({
	name: 'datepickerContacts'
});
server.use(restify.queryParser());
server.use(restify.bodyParser());

// Configure routes
var PATH = '/contacts';
server.get({path: PATH, version: '0.0.1'}, getAllContacts);
server.get({path : PATH + '/:contactId' , version : '0.0.1'} , getContact);
server.post({path: PATH, version: '0.0.1'}, addContact);
server.put({path: PATH + '/:contactId', version: '0.0.1' }, updateContact);
server.del({path : PATH +'/:contactId' , version: '0.0.1'}, deleteContact);
server.opts({path: PATH + '/:contactId', version: '0.0.1' }, crossOrigin);
server.opts({path: PATH, version: '0.0.1' }, crossOrigin);

// Data. As long as this REST-service stays alive, we can append a simple variable with data.
var contacts = [
	{ id: 1, firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
	{ id: 2, firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' },
	{ id: 3, firstName: 'Keira', surname: 'Van Halen', email: 'me@keiravanhalen.com' }
];

// For testing errorhandling, let's throw an error every ten requests
server.pre(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	return next();
});

// Start the server
server.listen(9688, '127.0.0.1', function () {
	console.log('%s listening at %s ', server.name, server.url);
});

// Dealing with CORS
function crossOrigin(req,res,next){
	var allowHeaders = ['Accept', 'Accept-Version', 'Content-Type', 'Api-Version', 'Origin', 'X-Requested-With']; // added Origin & X-Requested-With
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Headers', allowHeaders.join(', '));
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	if(req.method === 'OPTIONS') {
		res.send(204);
		return;
	}
	return next();
}

// The REST functions
function getAllContacts(req, res, next) {
	console.log('GET: all contacts');

	res.send(200, contacts);
	return next();
}
function getContact(req, res, next) {
	console.log('GET: One contact by ID', req.params.contactId);

	for(var i = 0; i < contacts.length; i++) {
		if(contacts[i].id === +req.params.contactId) {
			res.send(200, contacts[i]);
			return next();
		}
	}
}
function addContact(req, res, next) {
	console.log('POST: Add contact', req.params);

	var contact = {
		id: contacts.length + 1,
		firstName: req.params.firstName,
		surname: req.params.surname,
		email: req.params.email
	};
	contacts.push(contact);

	res.send(201, contact);
	return next();
}
function updateContact(req, res, next) {
	console.log('PUT: Update contact by ID', req.params.contactId, req.params);

	for(var i = 0; i < contacts.length; i++) {
		if(contacts[i].id === +req.params.contactId) {
			contacts[i].firstName = req.params.firstName;
			contacts[i].surname = req.params.surname;
			contacts[i].email = req.params.email;
			break;
		}
	}

	res.send(204);
	return next();
}
function deleteContact(req, res, next) {
	console.log('DELETE: Delete contact by ID', req.params.contactId);

	for(var i = 0; i < contacts.length; i++) {
		if(contacts[i].id === +req.params.contactId) {
			contacts.splice(i, 1);
			break;
		}
	}

	res.send(204);
	return next();
}