import express from 'express';
import {Request, Response} from 'express'

const mockRouter = express.Router();

mockRouter.get("/", (req:Request, res:Response) => {
	res.send("You just entered the mock router")
});


export {mockRouter};


// TODO: I guess this can be deleted later on
