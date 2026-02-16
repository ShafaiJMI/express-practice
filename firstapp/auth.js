const express = require('express');
const {MongoClient, ServerApiVersion } = require('mongodb');

const app = express()
const port = 3000 

const uri = "mongodb+srv://engineerbabu049:rCMdLf5mmmA9dgOZ@cluster0.62gme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(uri,
  {serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

app.post('/auth/generate-token', async (req, res) => {
    try{

    }
    catch{

    }

})
app.post('/auth/refresh-token', async (req, res) => {
    try {

    }
    catch {

    }
    
})
app.post('/auth/delete-token', async (req, res) => {
    try {

    }
    catch {

    }
    
})


app.listen(port,() => {
    console.log(`app Listening on Port ${port}`)
})