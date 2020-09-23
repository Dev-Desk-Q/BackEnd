# BackEnd DevDesk Queue

## Description

Find all the API endpoints necessary as a `student` or a `helper`. Based on hierarchy, each will have their own abilities. A `helper` has admin privileges over a `student`. When logged in as a `helper`, they will have the ability to update a ticket to assign to themselves when `assigned_to` is updated as `true`. A `helper` can also update `completed` as `true` to reflect that a ticket has been resolved, `false` if not, and is returned to the queue for another `helper` to take on. Finally, a `helper` can delete tickets.

When logged in as a `student`, they have the ability to see all available tickets to see if their question is already available, their tickets by id, or to create a ticket.

### Available End Points

| Method | Endpoint               | Description                                                 |
| ------ | ---------------------- | ----------------------------------------------------------- |
| GET    | /api/users/            | Takes you to the user data that has an existing login.      |
| GET    | /api/users/logout      | Allows a logged in user to logout.                          |
| POST   | /api/users/register    | Allows a new user to register.                              |
| POST   | /api/users/login       | Allows a current user to login to their profile.            |
| GET    | /api/tickets           | GET all available tickets in the DevDesk Queue.             |
| GET    | /api/tickets/:id       | GET a ticket by ticket ID.                                  |
| GET    | /api/tickets/users/:id | GET a ticket by user ID.                                    |
| POST   | /api/tickets/          | CREATE a new ticket.                                        |
| PUT    | /api/tickets/:id       | Allows a helper to UPDATE a ticket to assign to themselves. |
| DELETE | /api/tickets/:id       | Allows a helper to DELETE a ticket.                         |

#### Inquiries

Please direct questions to the DevDesk Queue backend team Steve Rattacasa or Amy Barger via Slack. Thank you for using the BackEnd DevDesk Queue!
