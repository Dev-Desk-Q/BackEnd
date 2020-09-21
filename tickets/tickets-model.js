
// get all tickets (GET) - helper/student accessible
// create (POST) a ticket - student 
// Update a ticket (PUT) - helper (to reassign the ticket or mark as resolved)

const db = require("../data/config.js");

module.exports = {
  add,
  get,
  getById,
  getStudentTickets,
  update,
  remove
};

function get() {
  return db("tickets")
}

function getById(id) {
  return db("tickets").where({ id }).first()
}

async function add(ticket) {
  const [id] = await db("tickets").insert(ticket, "id");

  return findById(id);
}

function getStudentTickets(studentId) {
    return db("tickets as t")
    .join("users as u", "u.id", "t.user_id")
    .select("t.id", "t.title", "t.description", "t.tried", "t.category", "t.completed", "t.assigned")
    .where("t.user_id", studentId)
}
function update(id, changes) {
	return db("tickets")
	.where({ id })
	.update(changes)
}

function remove(id) {
	return db("tickets")
	.where("id", id)
	.del()
}

