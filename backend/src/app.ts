import express from 'express'
import dotenv from 'dotenv'
import {mockRouter} from './routes/mockRouter'

dotenv.config()
const app = express()
const port = process.env.PORT

// --- configure app
app.set('port', process.env.PORT || 3000);

// ---- configure REST API
app.get('/', (req, res) => {
	res.send('Main Request is working')
});

app.use('/mock',mockRouter)

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
