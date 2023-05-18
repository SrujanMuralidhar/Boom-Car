const express = require("express")
const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017"
const cors = require("cors")
const fs = require("fs")
const { response } = require("express")


const app = express()
app.use(express.json())
app.use(cors())


app.post("/login",(request,response)=>{
    
    const username = request.body.username
    const password = request.body.password

    console.log("Inside /login")
    MongoClient.connect(url,(err,client)=>{
        if(err) throw err;
        let db = client.db("Vehical_Rental_system")
        db.collection("Credentials").findOne({username:username,password:password},(error,res)=>{
            if(error) throw error
            console.log("Connected") ;
            console.log(res);
            if(res != null){
                console.log("The username and Password are valid !")
                fs.writeFile("User_Pas.txt",`{username:${username},password:${password}}`,(err)=>{if(err) throw err
                    response.status(200).send("OK")
                      client.close()
                    
                })
               
                // db.collection("Current_User").insertOne({username:username,password:password},(error,res)=>{
                //     if(error) throw error
                //     response.status(200).send("OK")
                //     client.close()
                // })
                
            }
            else{
                console.log("Invalid Username or password")
                response.status(400).send("Invalid")
                client.close();
            }
            
        })
    
    })
})

app.post("/registration",(request,response)=>{
    
    const username = request.body.username
    const password = request.body.password


    MongoClient.connect(url,(err,client)=>{
        if(err) throw err;
        let db = client.db("Vehical_Rental_system")
        db.collection("Credentials").insertOne({username:username,password:password},(error,res)=>{
            if(error) throw error;
            console.log("Successfully Registered")
            fs.writeFile("User_Pas.txt",`{username:${username},password:${password}}`,(err)=>{
                if(err) throw err
                response.send("Registered")
                client.close()
                
             })
           

        })
       
    })
})



app.listen(3001,console.log("Server running"))