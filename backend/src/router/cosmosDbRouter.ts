import { Request, Response } from 'express'
import express from 'express'
const cosmosDbRouter = express.Router()
import { config } from '../config/cosmosConfig'
const { endpoint, key, databaseId, containerId } = config
import { CosmosClient } from '@azure/cosmos'
import { Seed } from '../interfaces/Seed'
const client = new CosmosClient({ endpoint, key })
const database = client.database(databaseId)
const container = database.container(containerId)

/**
 * Get Requests
 */
cosmosDbRouter.get('/db', async (req: Request, res: Response) => {
  try {
    const { resources: dbDefList } = await client.databases.readAll().fetchAll()
    res.status(200).json(dbDefList)
  } catch (err) {
    res.status(500).send(`Error when Reading databases: ${err}`)
  }
})

cosmosDbRouter.get('/container', async (req: Request, res: Response) => {
  try {
    const { resources: dbDefList } = await client.databases.readAll().fetchAll()
    res.status(200).json(dbDefList)
  } catch (err) {
    res.status(500).send(`Error when Reading databases: ${err}`)
  }
})

cosmosDbRouter.get('/envSamples', function (req: Request, res: Response) {
  res.status(501).send('Function is not implemented yet')
})

/**
 * Post Requests
 */
cosmosDbRouter.post('/createDb', async (req: Request, res: Response) => {
  try {
    if (req.body.dbName) {
      const { database } = await client.databases.createIfNotExists({
        id: req.body.dbName
      })
      res.status(200).send(`Succesfully created the database ${database}`)
    } else {
      res.status(400).send(`dbName attribute is missing`)
    }
  } catch (err) {
    res.status(500).send(`Something went wrong! ${err}`)
  }
})

cosmosDbRouter.post('/createContainer', async (req: Request, res: Response) => {
  try {
    if (req.body.dbName && req.body.containerName) {
      const { container } = await client
        .database(req.body.dbName)
        .containers.createIfNotExists(
          { id: req.body.containerName },
          { offerThroughput: 400 }
        )
      res.status(200).send('Everything worked as expected')
    } else {
      res
        .status(400)
        .send(
          'did your request contain the attributes: dbName and containerName?'
        )
    }
  } catch (err) {
    res.status(500).send(`Something went wrong! ${err}`)
  }
})

cosmosDbRouter.post('/newSeed', async (req: Request, res: Response) => {
  try {
    if (req.body.dbName) {
      let newSeed: Seed = {
        name: 'ChrisiSeed',
        latinName: 'SeedusChristopherus'
      }

      const { resource: createdItem } = await client
        .database(req.body.dbName)
        .container('Seed')
        .items.create(newSeed)
      res
        .status(200)
        .send(`New Seed ${newSeed.name} was added to your Database`)
    } else {
      res
        .status(400)
        .send(
          'did your request contain the attributes: dbName and containerName?'
        )
    }
  } catch (err) {
    res.status(500).send(`Something went wrong! ${err}`)
  }
})

/**
 *  Delete Requests
 */
cosmosDbRouter.delete('/envSample', function (req: Request, res: Response) {
  res.status(501).send('Function is not implemented yet')
})

cosmosDbRouter.delete('/deleteDb', function (req: Request, res: Response) {
  res.status(501).send('Function is not implemented yet')
})

export default cosmosDbRouter
