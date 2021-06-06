import {Request, Response} from "express";
import express from 'express';
const cosmosDbRouter = express.Router()

cosmosDbRouter.get('/',function(req:Request,res:Response){
    res.send("Fuck yes it was working as expected")
})

export default cosmosDbRouter



