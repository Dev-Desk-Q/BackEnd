# BackEnd
Ticket Routes
Method	Endpoint	Description
GET	/api/tickets	Returns all tickets
GET	/api/tickets/:id	Returns ticket by id
GET	/api/tickets/admin/:id	Returns tickets assigned to admin
GET	/api/tickets/student/:id	Returns tickets created by student
POST	/api/tickets	Creates a new ticket
PUT	/api/tickets/:id	Updates ticket by id
DELETE	/api/tickets/:id	Deletes ticket by id


Authentication Routes
Method	Endpoint	Description
POST	/api/login	Login to existing user
POST    /api/register Register a new user (include username, password, and role (student or helper))

