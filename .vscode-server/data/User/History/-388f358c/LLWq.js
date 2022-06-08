const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    user: String,
    date: Date.now

})