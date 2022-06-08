const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Middelware
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
const balanceRoute = require('./routes/balance');
const withdrawRoute = require('./routes/withdraw');
const accRoute = require('./routes/account');
const testRoute = require('./routes/test');

app.use('/post', postsRoute);//Use this route
app.use('/balance', balanceRoute);//Use this route
app.use('/withdraw', withdrawRoute);//Use this route
app.use('/account', accRoute);//Use this route
app.use('/test', testRoute);//Use this route
// app.use('/user', userRoute);

//Routes
app.get('/', (req,res) =>{
    res.send('We are  on home');
});



// API-Key

// API-Key






//Connect do Db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('connected to DB!'));

// Listen server
app.listen(8000);