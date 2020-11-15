import express from 'express';
import {Request, Response} from 'express'
import {mockData} from '../misc/mockData'

const mockRouter = express.Router();

mockRouter.get("/", (req:Request, res:Response) => {
	res.send("You just entered the mock router")
});

mockRouter.get("/data", (req:Request, res:Response)=>{
	res.send(mockData)
})

export {mockRouter};
