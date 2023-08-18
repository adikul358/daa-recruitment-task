import express from "express"
var router = express.Router()

router.get("/", (req, res) => res.send({
	objects: [
		{
			id: 0,
			name: "Macbook Air 15-inch M2",
			quantity: 2
		},
		{
			id: 1,
			name: "iPhone 14 Pro",
			quantity: 1
		},
	]
}))

export default router
