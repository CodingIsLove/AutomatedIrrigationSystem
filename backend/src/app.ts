import express from 'express'
import dotenv from 'dotenv'
import {mockRouter} from './routes/mockRouter'
import {Request, Response} from 'express'

dotenv.config()
const app = express()
const port = process.env.PORT

// --- configure app
app.set('port', process.env.PORT || 3000);

// ---- configure REST API
app.get('/', (req:Request, res:Response) => {
	res.send('Main Request is working')
});

app.use('/mock',mockRouter)

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
