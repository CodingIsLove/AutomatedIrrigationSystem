import mongoose from 'mongoose'
let connectionString = process.env.TEST_DATABASE;

/** Todo: Add back this code later, if you want to set it up clean for production
if(process.env.NODE_ENV === 'production'){
    connectionString = process.env.PROD_DATABASE;
    console.log(connectionString)
}else{
    connectionString = process.env.TEST_DATABASE;
    console.log(connectionString)
}
 */

class Database {
    constructor() {
        this._connect();
    }
    _connect() {
        mongoose.set("useCreateIndex",true);
        mongoose.connect(connectionString,{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
            console.log('Database connection successfully established');
        })
            .catch(error=>{
                console.error(error)
            })
    }
}

module.exports = new Database();
