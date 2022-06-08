const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    date: {
        type:Date,
        default: Date.now
    }
});

/*
mongoose.Schema({
    username: String,
    password: String,
    date: Date.now
});
*/


module.exports = mongoose.model('Posts', PostSchema);
