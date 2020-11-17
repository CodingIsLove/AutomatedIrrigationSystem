import chai from 'chai'
import {describe, it, before, after} from "mocha";
import rest from 'restler'
import {baseUrl} from "./testingVariables";
import {mockData} from '../misc/mockData'

const should = chai.should();


describe('Mock Data Requests', function () {
    it('should make the base Request', function(done){
        rest.get(`${baseUrl}/mock`)
            .on('fail', (data, response)=>{
                throw new Error('Failed to connect')
            })
            .on('success',(data,response)=>{
                console.log("exactly what I wanted")
                done()
            })
            .on('error', (err)=>{
                done(err)
            })
    })
});


describe('Seeddatabase', function () {

    before(function (done) {
        console.log("Test Call that is called before")
        done()
    })

    after(function (done) {
        console.log("Test Call that is called after ")
        done()
    })


    it('Brief description of the test', () => {
        console.log("Bla bla bla")
    })
});