const express = require('express');
const { isObjectIdOrHexString } = require('mongoose');
const { urlToHttpOptions } = require('url');
const router = express.Router();
const Post = require('../models/Post');
const axios = require('axios');

router.route('/').get(function (req, res) {
        console.log("Test-Post");
        const accNo = Post.findById("62974eb352a44508da30387d", function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    });

//Get All balance
router.get('/', async (req, res) => {
    console.log("Get-Balance")
    try {
        const balance = await Post.find().limit(10);
        res.json(balance);
    } catch (err) {
        res.json({ message: err });
    }
}); 
 

//Submit balance
router.post('/', async (req,res) => {
    // console.log("Verbinding met Rusland");
    console.log("Dobro pozhalovat' v Rossiyu");
    // const balance = res.send({type: 'POST'});
    // res.send({type: 'POST'});
    
/*
    const retBalance = JSON.stringify({
        "head": {
            "fromCtry": req.body.head.toCtry,//"RU",
            "fromBank": req.body.head.toBank,//"GRP3",
            "toCtry": req.body.head.fromCtry,//"RU",
            "toBank": req.body.head.fromBank//"GRP3"
        },
        "body": {
            //Needs to come out of the database
            "acctNo": req.body.body.acctNo,//"RUGRP30000123456", 
            "pin": req.body.body.pin,
            "amount": req.body.body.amount
        }           
});

    res.send(retBalance);
    */
    
    /*
    const balance = new balance({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const balancebalance = await balance.save();
        res.json(balancebalance);        
    }catch (err) {
        res.json({ message: err});
    }
    */
    
    /*.then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
    
    // console.log(req.body);
    */

});


//Specific post
router.get('/:balanceId', async (req, res) => {
    try {
        const balance = await Post.findById(req.params.balanceId);
        res.json(balance);
    }
    catch (err) { res.json({ message: err }); }

    // console.log(req.params.postId);
});

//Specific value of post
router.get('/:balanceId/saldo', async (req, res) => {
    console.log(" Saldo");
    res.send({saldo:  "Post saldo Here"});

    // console.log(req.params.postId);
});


//Delete a specific balance
router.delete('/:balanceId', async(req,res) => {
    try{
        const removeBalance = await balance.remove({ _id: req.params.balanceId });
        res.json(removeBalance);
    }catch(err){
        res.jsonp({message:err});
    }    
});

//Upadte post
router.patch('/:postId', async (req, res) => {
    const updates = req.body
    console.log("Iban");
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId }, { $set: updates });
        res.json(updatedPost);
        // updatedPost.save();
    } catch (err) {
        res.json({ message: err });
    }
})

//Upadte post
router.patch('/:iban', async (req, res) => {
    const updates = req.body
    console.log("Iban2");
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId }, { $set: updates });
        res.json(updatedPost);
        // updatedPost.save();
    } catch (err) {
        res.json({ message: err });
    }
})

//Data from esp32, Read 

//Export
module.exports = router;