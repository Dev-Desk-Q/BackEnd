// get all tickets (GET) - helper/student accessible
// create (POST) a ticket - student 

const express = require("express");

const tickets = require("./tickets-model");

const { checkUserID, checkUserData } = require("../middleware/restrict")

const router = express.Router();


router.get("/users/:id/tickets", checkUserID(), (req, res) => {
	tickets.get(req.params.id)
		.then((ticket) => {
			res.status(200).json(ticket)
		})
		.catch(next)
})

router.get("/users/:id/tickets/:ticketId", checkUserID(), (req, res) => {
	tickets.getById(req.params.id, req.params.ticketId)
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

router.post("/users/:id/tickets", checkUserID(), (req, res) => {
	if (!req.body.text) {
		return res.status(400).json({
			message: "Need a value for text",
		})
	}

	tickets.add(req.params.id, req.body)
		.then((ticket) => {
			res.status(201).json(ticket)
		})
		.catch(next)
})

router.put("/users/:id/tickets/:ticketId", checkUserData(), checkUserID(), (req, res) => {
	tickets.update(req.params.id, req.body)
		.then((ticket) => {
			res.status(200).json(ticket)
		})
		.catch(next) 
})

router.delete("/users/:id/tickets/:ticketId", checkUserID(), (req, res) => {
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