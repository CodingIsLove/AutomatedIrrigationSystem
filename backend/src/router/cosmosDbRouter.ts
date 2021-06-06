import {Request, Response} from "express";
import express from 'express';
const cosmosDbRouter = express.Router()


/**
 * Get Requests
 */
cosmosDbRouter.get('/envSamples',function(req:Request,res:Response){
    res.status(501).send("Function is not implemented yet")
})

cosmosDbRouter.get('/db', function (req:Request, res:Response){
    res.status(501).send("Function is not implemented yet")
})

/**
 * Post Requests
 */
cosmosDbRouter.post('/createDb',function(req:Request,res:Response){
    res.status(501).send("Function is not implemented yet")
})

cosmosDbRouter.post('/envSample',function(req:Request,res:Response){
    res.status(501).send("Function is not implemented yet")
})

/**
 *  Delete Requests
 */
cosmosDbRouter.delete('/envSample',function(req:Request,res:Response){
    res.status(501).send("Function is not implemented yet")
})

cosmosDbRouter.delete('/deleteDb',function(req:Request,res:Response){
    res.status(501).send("Function is not implemented yet")
})

export default cosmosDbRouter



