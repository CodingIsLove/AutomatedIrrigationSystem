import mongoose from 'mongoose'
let connectionString = process.env.TEST_DATABASE;

class Database {
    constructor() {
        this._connect();
    }
    _connect() {
        mongoose.set("useCreateIndex",true);
        mongoose.connect('mongodb://mongo:27017/devOps',{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
            console.log('Database connection successfully established');
        })
            .catch(error=>{
                console.error(error)
            })
    }
}

module.exports = new Database();
