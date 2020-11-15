import express from 'express'
import dotenv from 'dotenv'
import dot = Mocha.reporters.dot;

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
	res.send('Hello World!')
})
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
