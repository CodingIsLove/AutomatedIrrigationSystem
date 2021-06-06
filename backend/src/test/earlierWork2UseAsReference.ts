import {describe, it} from "mocha";
import rest from "restler";

describe('ta Requests', function () {
    it('should make the base Request', function (done) {
        rest.get(`baseur/mock`)
            .on('fail', (data, response) => {
                throw new Error('Failed to connect')
            })
            .on('success', (data, response) => {
                console.log("exactly what I wanted")
                done()
            })
            .on('error', (err) => {
                done(err)
            })
    })
});
