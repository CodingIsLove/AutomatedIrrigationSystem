import express from 'express';
import {Request, Response} from 'express'

const sensorRouter = express.Router();

sensorRouter.post("/toogle", (req:Request, res:Response) => {

    //todo: this is for testing purpose only delete later on
    res.send("You just toggled the pin 26")
});

export {sensorRouter};
