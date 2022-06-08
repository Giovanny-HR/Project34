const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    iban: {
        type: String,
        required: true
    },
    balance: {
        type: String,
        required: true
    },
    pin:{
        type: String,
        required: true
    },
    naam:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


/*
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    saldo: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});*/

/*
mongoose.Schema({
    username: String,
    password: String,
    date: Date.now
});
*/


module.exports = mongoose.model('Posts', PostSchema);