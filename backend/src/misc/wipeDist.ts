import rimraf from 'rimraf'
import path from 'path'
let dist_path = path.join(__dirname, '..','..','dist')

// Delete the dist directory
rimraf(dist_path,(err)=>{
    if(!err){
        console.log("Successfully deleted directory")
    }else{
        console.log(`Uups, an Error occured: ${err}`)
    }
})
