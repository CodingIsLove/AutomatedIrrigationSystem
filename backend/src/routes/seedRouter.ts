import express from 'express';
import {Request, Response} from 'express'

const seedRouter = express.Router();

seedRouter.get("/", (req:Request, res:Response) => {
    res.send("You just entered the mock router")
});

seedRouter.get("/data", (req:Request, res:Response)=>{
    res.send("You just entered the mock router")
})

export {seedRouter};
