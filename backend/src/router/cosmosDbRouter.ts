import express from "express";

const cosmosDbRouter = express().Router

cosmosDbRouter.get('/',function(req,res){
    res.send("Fuck yes it was working as expected")
})
