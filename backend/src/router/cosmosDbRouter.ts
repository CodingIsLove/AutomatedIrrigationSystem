import {Request, Response} from "express";
import express from 'express';
const cosmosDbRouter = express.Router()
import {config} from '../config/cosmosConfig'
const {endpoint, key, databaseId, containerId} = config
import {CosmosClient} from '@azure/cosmos'
const client = new CosmosClient({endpoint,key})
const database = client.database(databaseId)
const container = database.container(containerId)



/**
 * Get Requests
 */
cosmosDbRouter.get('/db', async (req:Request, res:Response)=>{
    try {
        const {resources: dbDefList} = await client.databases.readAll().fetchAll()
        res.status(200).json(dbDefList)
    }catch(err){
       res.status(500).send(`Error when Reading databases: ${err}`)
    }
})

cosmosDbRouter.get('/container', async (req:Request, res:Response)=>{
    try {
        const {resources: dbDefList} = await client.databases.readAll().fetchAll()
        res.status(200).json(dbDefList)
    }catch(err){
        res.status(500).send(`Error when Reading databases: ${err}`)
    }
})

cosmosDbRouter.get('/envSamples',function(req:Request,res:Response){
    res.status(501).send("Function is not implemented yet")
})

/**
 * Post Requests
 */
cosmosDbRouter.post('/createDb',async (req:Request,res:Response)=>{
    try{
        const {database} = await client.databases.createIfNotExists({
            id: databaseId
        })
        res.status(200).send(`Succesfully created the database ${database}`)
    }catch (err){
        res.status(500).send(`Something went wrong! ${err}`)
    }})

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



