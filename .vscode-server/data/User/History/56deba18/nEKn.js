const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
require('dotenv/config');

// Connection URL
const url = 'mongodb+srv://Groep3:Groep3@groep3.0ww8s.mongodb.net/groep3';
// const url = 'mongodb+srv://Groep3:Groep3@groep3.0ww8s.mongodb.net/groep3';
const client = new MongoClient(url);

// Database Name
const dbName = 'groep3';

//Middelware
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
const balanceRoute = require('./routes/balance');
const withdrawRoute = require('./routes/withdraw');
const accRoute = require('./routes/account');
const testRoute = require('./routes/test');
const letsRoute = require('./routes/lets');

app.use('/post', postsRoute);//Use this route
app.use('/balance', balanceRoute);//Use this route
app.use('/withdraw', withdrawRoute);//Use this route
app.use('/account', accRoute);//Use this route
app.use('/test', testRoute);//Use this route
app.use('/lets', letsRoute);//Use this route
// app.use('/user', userRoute);

//Routes
app.get('/', (req,res) =>{
    res.send('We are  on home');
});


/*
// API-Key
var axios = require('axios');
var data = JSON.stringify({
    "collection": "posts",
    "database": "groep3",
    "dataSource": "Groep3",
    "projection": {
        "_id": 1
    }
});

var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-ydaee/endpoint/data/beta/action/findOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'OEq1cCN07Wu1g4uf05H8EXHJQKsk9vcymhIqIDEa1NAY7MUnZMtSMD8bGkyTRA0x'
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
*/



//Connect do Db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('connected to DB!'));
console.log("Connected");
// Listen server
app.listen(8000);  