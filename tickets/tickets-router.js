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
			message: "Need the required fields.",
		})
	}
	const newTicket = {...req.body, user_id: req.userData.userID}
	
	tickets.add(newTicket)
		.then((ticket) => {
			res.status(201).json(ticket)
		})
		.catch(next)
})
// Check with front end to validate the PUT data and form specifically for helper assignment.
router.put("/:id", restrict("student"), (req, res, next) => {
	if (req.body.assigned === true) {
		const assignedTo = req.userData.userID 
		const updatedTicket = { ...req.body, assigned_to: assignedTo}
		tickets.update(req.params.id, updatedTicket)
		.then((ticket) => {
			res.status(200).json({message: "The ticket has been updated, and a helper assigned."})
		})
		.catch(next) 

		} else { 

	tickets.update(req.params.id, req.body)
		.then((ticket) => {
			res.status(200).json({message: "The ticket has been updated"})
		})
		.catch(next) 
	}
})

router.delete("/:id", restrict("helper"), (req, res, next) => {
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