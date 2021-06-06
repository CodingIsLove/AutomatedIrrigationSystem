import express from 'express'
import dotenv from 'dotenv'
import {Request, Response} from 'express'
import cosmosDbRouter from "./router/cosmosDbRouter";

// Setting the correct node environment mode
process.env.NODE_ENV = 'testing'

// configure the environment variables correct
if (process.env.NODE_ENV === 'production') {
    dotenv.config({path: `.env.production`})
} else if (process.env.NODE_ENV === 'staging') {
    dotenv.config({path: `.env.staging`})
} else {
    dotenv.config({path: `.env.testing`})
}

const app = express()
const port = process.env.PORT
app.set('port', process.env.PORT || 3000);

// ---- configure REST API
app.get('/', (req: Request, res: Response) => {
    res.send('Main Request is working')
});

// Routes
app.use('/cosmosDb', cosmosDbRouter)

// Start application
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
