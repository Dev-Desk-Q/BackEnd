// get all tickets (GET) - helper/student accessible
// create (POST) a ticket - student 

const express = require("express");

const tickets = require("./tickets-model");

const restrict = require("../middleware/restrict")

const router = express.Router();

// Get all tickets belonging to user whose ID is passed in

router.get("/", restrict("helper"), (req, res, next) => {
	tickets.get(req.params.id)
		.then((ticket) => {
			res.status(200).json(ticket)
		})
		.catch(next)
})

router.get("/:id", restrict("student"), (req, res, next) => {
	tickets.getById(req.params.id)
		.then((ticket) => {
			if (ticket) {
				res.json(ticket)
			} else {
				res.status(404).json({
					message: "Ticket was not found",
				})
			}
		})
		.catch(next)
})

router.get("/users/:id", restrict("student"), (req, res, next) => {
	tickets.getByUserId(req.params.id)
		.then((ticket) => {
			if (ticket) {
				res.json(ticket)
			} else {
				res.status(404).json({
					message: "Ticket was not found",
				})
			}
		})
		.catch(next)
})

router.post("/", restrict("student"), (req, res, next) => {
	if (!req.body) {
		return res.status(400).json({
			message: "Need a value for text",
		})
	}

	tickets.add(req.body)
		.then((ticket) => {
			res.status(201).json(ticket)
		})
		.catch(next)
})

router.put("/users/:id/tickets/:ticketId", restrict("helper"), (req, res, next) => {
	tickets.update(req.params.id, req.body)
		.then((ticket) => {
			res.status(200).json(ticket)
		})
		.catch(next) 
})

router.delete("/users/:id/tickets/:ticketId", restrict("helper"), (req, res, next) => {
	tickets.remove(req.params.id)
		.then((count) => {
			if (count > 0) {
				res.status(200).json({
					message: "The ticket has been deleted",
				})
			} else {
				res.status(404).json({
					message: "The ticket could not be found",
				})
			}
		})
		.catch(next)
})

module.exports = router