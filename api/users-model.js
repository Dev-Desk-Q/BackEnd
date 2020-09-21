const db = require("../data/config")

async function add(user) {
	const [id] = await db("users").insert(user)
	return findById(id)
}

function find() {
	return db("users").select("id", "username")
}

function findBy(filter) {
	return db("users")
		.select("id", "username", "password")
		.where(filter)
}

function findById(id) {
	return db("users")
		.select("id", "username")
		.where({ id })
		.first()
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

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
}