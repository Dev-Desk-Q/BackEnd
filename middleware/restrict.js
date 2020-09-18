const jwt = require("jsonwebtoken")

function restrict(role) {
	// user roles - student is base user, helper is admin
	const roles = ["student", "helper"]

	return async (req, res, next) => {
		const authError = {
			message: "Invalid credentials",
		}

		try {
            // Don't need cookies unless React 2 requirements changed, may delete/comment out
			const token = req.cookies.token
			if (!token) {
				return res.status(401).json(authError)
			}

			// decode the token, re-sign the payload, and check if signature is valid
			jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
				if (err) {
					return res.status(401).json(authError)
				}

				// make sure the user's role is above or the same as the required role
				if (role && roles.indexOf(decoded.userRole) < roles.indexOf(role)) {
					return res.status(403).json({
						message: "You are not allowed here",
					})
				}

				// we know the user is authorized at this point,
				// make the token's payload available to other middleware functions
				req.token = decoded

				next()
			})
		} catch(err) {
			next(err)
		}
	}
}

module.exports = restrict