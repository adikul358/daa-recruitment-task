import express from "express"
import { MongoClient, ObjectId } from "mongodb"

var router = express.Router()

const uri = "mongodb://127.0.0.1:27017/?directConnection=true"
const client = new MongoClient(uri)
const db = client.db('daa')
const objects = db.collection('objects')

router.get("/", async (req, res) => {
	try {
    const result = await objects.find({}).toArray()
    console.log(result)
		res.send(result)
	} catch (err) {
		console.log(err)
  }
})

router.get("/:id", async (req, res) => {
	try {
    const result = await objects.findOne({ _id: new ObjectId(req.params.id) })
    console.log(result)
		if (result === null) { res.send(404) }
		else { res.send(result) }
	} catch (err) {
		res.sendStatus(400)
		console.log(err)
  }
})

router.post("/", async (req, res) => {
	try {
		var result
		if (Array.isArray(req.body)) {
			result = await objects.insertMany(req.body)
		} else {
			result = await objects.insertOne(req.body)
		}
    console.log(result)
		res.status(201).send(result)
	} catch (err) {
		res.sendStatus(400)
		console.log(err)
  }
})

router.patch("/:id", async (req, res) => {
	try {
		const result = await objects.updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body }, )
    console.log(result)
		res.status(200).send(result)
	} catch (err) {
		res.sendStatus(400)
		console.log(err)
  }
})

router.delete("/:id", async (req, res) => {
	try {
    const result = await objects.deleteOne({ _id: new ObjectId(req.params.id) })
    console.log(result)
		if (result === null) { res.send(404) }
		else { res.send(result) }
	} catch (err) {
		res.sendStatus(400)
		console.log(err)
  }
})


export default router
