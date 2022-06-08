const express = require('express');
const app = express();
const { urlToHttpOptions } = require('url');
const router = express.Router();
const Post = require('../models/Post');
const mongoose = require('mongoose');
const res = require('express/lib/response');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

/*
router.get('/', (req, res) => {

    console.log(" This is a Test");
    res.send('We are  on Test Page');
});
*/


// Connection URL
const url = 'mongodb+srv://Groep3:Groep3@groep3.0ww8s.mongodb.net/groep3';
// const url = 'mongodb+srv://Groep3:Groep3@groep3.0ww8s.mongodb.net/groep3';
const client = new MongoClient(url);

// Database Name
const dbName = 'groep3';

router.get('/', (req, res) => {
    async function main() {
        console.log(" This is a Test", req.body);
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('posts');
        console.log(collection);

        // the following code examples can be pasted here...

        // Find Documents with a Query Filter
        //Stuur Iban & check the balance and return it
        // const filteredDocs = await collection.find({iban: "RUDRP30000777321", saldo }).toArray();
        const getIban = await collection.find()
        const filteredDocs = await collection.distinct("saldo");
        res.send(filteredDocs);

        console.log('Found documents filtered by {Iban} =>', filteredDocs);

        return 'Balance Done';
    }

    main()
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());

});



router.route('/test').get(function (req, res) {
    console.log("Test-Post");
    Post.findById("62974eb352a44508da30387d", function (err, result) {
        if (err) {
            
            res.send(err);
        } else {
            console.log("Test-Post-Found");
            res.json(result);
        }
    });
});



router.post('/', async (req, res) => {
    console.log("Test-Post" , req.body);

    res.sendStatus(200);

    const account = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedAcc = await account.save();
        res.json(savedAcc);
    } catch (err) {
        res.json({ message: err });
    }
});





//Export
module.exports = router;