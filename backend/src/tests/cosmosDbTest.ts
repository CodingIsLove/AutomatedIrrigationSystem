import chai from 'chai'
import {describe, it, before, after} from 'mocha'
import http from 'http'
import rest from 'restler'

const should = chai.should()
const baseUrl = 'http://localhost:8081'

describe('Basic CosmosDB Transactions', function () {
    it('should create a test database', function (done) {
        const postData = JSON.stringify({
            dbName: 'TestDatabase'
        })
        const req = http.request({
                port: 8081,
                hostname: 'http://localhost',
                path: '/cosmosDb/createDb',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': Buffer.byteLength(postData)
                }
            }, (res) => {
                res.setEncoding('utf-8')
                res.on('data', (chunk) => {
                    console.log(`BODY: ${chunk}`);
                    done()
                });
                res.on('end', () => {
                    console.log('No more data in response.');
                    done()
                });
            }
        )

        req.on('error', (e)=>{
            console.error('Fuck something went not as expected')
        })

    })
    it('should create a new Seed Container', function (done) {
        rest.post(`${baseUrl}/cosmosDb/createContainer`,
            {
                data: {
                    dbName: 'TestDataBase',
                    containerName: 'Seed'
                }
            })
            .on('fail', (data, response) => {
                throw new Error('Successfull Request, but failed to create container')
            })
            .on('success', (data, response) => {
                done()
            })
            .on('error', (err) => {
                throw new Error('Error occured: When creating container')
            })
    })
    it('should write a new entry into the database', function (done) {
        throw new Error('NOT IMPLEMENTED YET')
    })
    it('should read the newly written entry from the database', function (done) {
        throw new Error('NOT IMPLEMENTED YET')
    })
    it('should delete the newly written entry from the database', function (done) {
        throw new Error('NOT IMPLEMENTED YET')
    })
    it('should not be able to read any entry, since now everything is deleted', function (done) {
        throw new Error('NOT IMPLEMENTED YET')
    })
    it('should delete the database ', function (done) {
        throw new Error('NOT IMPLEMENTED YET')
    })
    it('should not be able to find the database since the database was deleted ', function (done) {
        throw new Error('NOT IMPLEMENTED YET')
    })
})


