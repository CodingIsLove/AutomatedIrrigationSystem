import express from 'express'
import dotenv from 'dotenv'
import {Request, Response} from 'express'
import {sensorRouter} from "./routes/sensorRouter";

// Setup
dotenv.config()
setupDb()
const app = express()
const port = process.env.PORT

// --- configure app
app.set('port', process.env.PORT || 3000);

// ---- configure REST API
app.get('/', (req:Request, res:Response) => {
	res.send('Main Request is working')
});

// --- Configured routes
app.use('/mock',mockRouter)
app.use('/sensors',sensorRouter)


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
