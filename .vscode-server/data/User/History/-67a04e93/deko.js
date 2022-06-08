const express = require('express');
const app = express();
const { urlToHttpOptions } = require('url');
const router = express.Router();
const Post = require('../models/Post');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const { mainModule } = require('process');
const { setDefaultResultOrder } = require('dns');
const { isNumber } = require('util');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// Connection URL
const url = 'mongodb+srv://Groep3:Groep3@groep3.0ww8s.mongodb.net/groep3';
// const url = 'mongodb+srv://Groep3:Groep3@groep3.0ww8s.mongodb.net/groep3';
const client = new MongoClient(url);

// Database Name
const dbName = 'groep3';




// console.log(collection);

router.get('/', async (req, res) => {
    console.log("Get-Account");

    

    //  const updateResult = await collection.updateOne({iban: stringen},{ $set: { saldo: isNumber } });
    // console.log(updateResult); 

    try {
        const balance = await Post.find().limit(10);
        res.json(balance);
    } catch (err) {
        res.json({ message: err });
    }
});
/*

router.get('/', (req, res) => {
    async function main() {
        console.log(" This is a Account: ", req.body);
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

}); */

/*

//Get All post
router.get('/', (req, res) => {
    async function main() {
    await client.connect();
  console.log('Connected successfully to server');


        const db = client.db(dbName);
        const collection = db.collection('posts');

    console.log("Account");

        


        console.log(req.body);



    // const findResult = await collection.find({}).toArray();
        // const findResult = await collection.distinct("saldo");
        // console.log(findResult);

        // const updateResult = await collection.updateOne({iban: "iban"},{ $set: { saldo: 999999 } });
    // console.log(updateResult); 

        return 'Balance Done';
    }

    main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
    
    /* 
    try {
        const account = await Post.find().limit(10);
        res.json(account);
    } catch (err) {
        res.json({ message: err });
    }
    // res.send('We are on post');
});*/

/*
//Submit post
router.post('/', async (req, res) => {
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

    /*.then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
    
    // console.log(req.body);

});
*/
router.post('/', async (req, res) => {

        // console.log("Received-Post", req.body);        
        // console.log("Received-Saldo ", saldo); 


    // const numb = Number(req.body.saldo);
    // const stringen = String(req.body.iban); 

    // console.log(numb);
    // console.log(stringen);
        res.sendStatus(200);
});
    


//Specific post
router.get('/:accId', async (req, res) => {
    try {
        const account = await Post.findById(req.params.accId);
        res.json(account);
    }
    catch (err) { res.json({ message: err }); }

    // console.log(req.params.postId);
});


//Delete a specific post
router.delete('/:accId', async (req, res) => {
    try {
        const removeAcc = await Post.remove({ _id: req.params.accId });
        res.json(removeAcc);
    } catch (err) {
        res.jsonp({ message: err });
    }

});


/*
//Upadte post
router.patch('/:postId', async (req, res) => {
    const updates = req.body

    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId }, { $set: updates });
        res.json(updatedPost);
        // updatedPost.save();
    } catch (err) {
        res.json({ message: err });
    }
})
*/



//Export
module.exports = router;