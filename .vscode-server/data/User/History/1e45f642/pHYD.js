const express = require('express');
const app = express();
const { urlToHttpOptions } = require('url');
const router = express.Router();
const Post = require('../models/Post');
const mongoose = require('mongoose');
const res = require('express/lib/response');

// router.get('/', (req, res) => {
//     console.log(" This is a Test");
//     res.send('We are  on Test Page');
// });
/*
router.get('/', async(req,res) => {
    console.log("Test"); 
    const acctNo = await Post.findOne({ naam: "Giovanny Marchena" }).exec();
    res.json(acctNo);
})*/



router.route('/').get(function (req, res) {
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





//Export
module.exports = router;