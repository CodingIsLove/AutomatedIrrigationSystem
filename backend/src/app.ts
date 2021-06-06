import express from 'express'
import dotenv from 'dotenv'
import {Request, Response} from 'express'
import cosmosDbRouter from "./router/cosmosDbRouter";

// Setup
dotenv.config({path:`.env.${process.env.NODE_ENV}`})
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


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
