const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb+srv://Groep3:Groep3@groep3.0ww8s.mongodb.net/groep3';
// const url = 'mongodb+srv://Groep3:Groep3@groep3.0ww8s.mongodb.net/groep3';
const client = new MongoClient(url);

// Database Name
const dbName = 'groep3';

router.get('/', (req, res) => {
    async function main() {
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('posts');
        console.log(collection);

        // the following code examples can be pasted here...

        // Find Documents with a Query Filter
        //Stuur Iban & check the balance and return it

        // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
        // console.log(" Insert =>" ,insertResult)

        // const findResult = await collection.find({}).toArray();
        const findResult = await collection.distinct("iban");

        // const filteredDocs = await collection.find({iban: "RUDRP30000777321", saldo }).toArray();
        // id = "6299236369e8ba9ca306b91f";
        // const getIban = await collection.findById(req.body.id);
        // const filteredDocs = await collection.distinct("saldo");
        // console.log(filteredDocs);
        // res.send(getIban);
        console.log(findResult);

        // const filteredDocs = await collection.findById({iban: "RUDRP30000777321", saldo } ).toArray();
        // console.log('Found documents filtered by =>', filteredDocs);

        const updateResult = await collection.updateOne({ iban: "RUGRP30000777888" }, { $set: { saldo: 3333333 } });
        //   console.log('Update =>', updateResult, filteredDocs);
        // console.log(req.body);


        // console.log('Found documents filtered by {Iban} =>', filteredDocs);

        return 'Balance Done';
    }

    main()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());

});

router.post('/', async (req, res) => {
    async function main() {
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('posts');
        //   console.log(collection);

        //   const updateResult = await collection.updateOne({a: 2}, {$set: {saldo: 25555555}});
        //   console.log('Update =>', updateResult);


        return 'Balance Done';
    }
    main()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());

    res.sendStatus(200);
});




//Export
module.exports = router;




/*router.post('/add', (req,res) => {
    const body = req.body;
    const newSaldo = req.posts.saldo;
    newSaldo.push(body);
    console.log(newSaldo);
    collection.posts.updateOne({"naam": req.body.naam},{$set: {"naam": " Unknown" }})
});*/