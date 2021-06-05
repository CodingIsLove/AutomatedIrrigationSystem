import express from 'express'
import dotenv from 'dotenv'
import {Request, Response} from 'express'

// Setup
dotenv.config()
const app = express()
const port = process.env.PORT

// --- configure app
app.set('port', process.env.PORT || 3000);

// ---- configure REST API
app.get('/', (req:Request, res:Response) => {
	res.send('Main Request is working')
});

// --- Configured routes
app.use('/cosmosDb',cosmosDbRouter)
app.use('/sensors',sensorRouter)


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
