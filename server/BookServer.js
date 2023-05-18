const express = require("express")
const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017"
const cors = require("cors")
const fs = require("fs")


const app = express()
app.use(express.json())
app.use(cors())

app.post("/booknow",(request,response)=>{
    MongoClient.connect(url,(err,client)=>{
        if(err) throw err;
        let db = client.db("Vehical_Rental_system")
        let data = fs.readFileSync("User_Pas.txt","utf-8")
        db.collection("Credentials").findOne(data,(error,res)=>{
            if(error) throw error
            console.log("Connected") ;

            if(res == data){
                db.collection("Credentials")
            }
        })
    })
})




app.listen(3002,console.log("Server is running !"))