const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017"
const express = require("express")
const parser = require("body-parser")

const app = express()
app.use(express.urlencoded())


app.get("/",(resquest,response,next)=>{
    response.send(`<form class = "login_page" method = "post" action = "/success"><CENTER>
    <h1>BOOM CARS</h1>
    <label>Username :</label><input type="text" name="username" placeholder=" Enter Username" /><br><br>
    <label>Password :</label><input type="password" name="password" placeholder=" Enter Password" /><br><br>
    <input type="submit" value="Login/Sign In"/>
    <button>Skip</button>
    </CENTER></form>`)
})

app.post("/success",(request,response)=>{
    MongoClient.connect(url,(err,client)=>{
        if(err) throw err;
        let db = client.db("Vehical Rental system")
        db.collection("Credentials").insertOne(request.body,(error,res)=>{
            if(error) throw error;
            client.close();
        })
        response.send("Saved successfully !")
        
    })
})

app.listen(4200,console.log("Connected succesfully"))