import express from "express"
import { MongoClient } from "mongodb"

var router = express.Router()

const uri = "mongodb://127.0.0.1:27017/?directConnection=true"
const client = new MongoClient(uri)
const db = client.db('daa')
const objects = db.collection('objects')

router.get("/", async (req, res) => {
	try {
    const result = await objects.find({}, { projection: { _id: 0 } }).toArray()
    console.log(result)
		res.send(result)
	} catch (err) {
		console.log(err)
  } finally {
    await client.close()
  }
})

export default router
