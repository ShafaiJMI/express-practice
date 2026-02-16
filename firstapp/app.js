const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = 3001

const uri = "mongodb+srv://engineerbabu049:rCMdLf5mmmA9dgOZ@cluster0.62gme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(uri,
  {serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

// Connect to MongoDB
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        db = client.db('ampler'); // Replace with your database name
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

connectToMongoDB();

app.get('/',async (req, res) => {
  try {
    const collection = db.collection('invoices');
    const invoices = await collection.find({}).toArray();
    res.send(invoices);
} catch (err) {
    res.status(500).send(err);
}
})


app.post('/create-invoice',async (req, res) => {
  try {
    const collection = db.collection('invoices');
    const invoice = await collection.insertOne(res.body)
    req.body();
    res.status(200).send({message:'Invoice Created'});
  } catch (err) {
    res.status(400).send(err);
  }
})

app.put('/update-invoice',async (req, res) => {
  try {
    const collection = db.collection('invoices');
    const invoice = await collection.Update(res.body)
    req.body();
    res.status(200).send({message:'Invoice Created'});
  } catch (err) {
    res.status(400).send(err);
  }
})

app.delete('/delete-invoice',async (req, res) => {
  try {
    const collection = db.collection('invoices');
    const invoice = await collection.delete(res.body)
    req.body();
    res.status(200).send({message:'Invoice Created'});
  } catch (err) {
    res.status(400).send(err);
  }
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})