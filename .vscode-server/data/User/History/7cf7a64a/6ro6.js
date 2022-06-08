const express = require('express');
const { urlToHttpOptions } = require('url');
const router = express.Router();
const Post = require('../models/Post');

//Get All withdraw
router.get('/', async (req, res) => {
    console.log("Get-Withdrawal")
    try {
        const balance = await Post.find().limit(10);
        res.json(balance);
    } catch (err) {
        res.json({ message: err });
    }
}); 


//Submit withdraw
router.post('/', async (req, res) => {
    
    console.log('Withdraw');
    const retWithdraw = JSON.stringify({
        "head": {
            "fromCtry": req.body.head.toCtry,//"RU",
            "fromBank": req.body.head.toBank,//"GRP3",
            "toCtry": req.body.head.fromBank,//"RU",
            "toBank": req.body.head.fromCtry//"GRP3"
        },
        "body": {
            "success": true,
            "acctNo": req.body.body.acctNo,//"RUGRP30000123456", 
            "balance": req.body.body.balance//1111            
        }});
        res.send(retWithdraw);

   /*
    const withdraw = new withdraw({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const withdrawwithdraw = await withdraw.save();
        res.json(withdrawwithdraw);        
    }catch (err) {
        res.json({ message: err});
    }
    */
   

});

//Specific post
router.get('/:withdrawId', async (req, res) => {
    try {
        const withdraw = await Post.findById(req.params.withdrawId);
        res.json(withdraw);
    }
    catch (err) { res.json({ message: err }); }

    // console.log(req.params.postId);
});


//Delete a specific withdraw
router.delete('/:withdrawId', async (req, res) => {
    try {
        const removewithdraw = await withdraw.remove({ _id: req.params.withdrawId });
        res.json(removewithdraw);
    } catch (err) {
        res.jsonp({ message: err });
    }

});

//Update withdraw
router.patch('/:withdrawId', async (req, res) => {
    try {
        const updatedWithdrawal = await withdraw.updateOne({ _id: req.params.withdrawId }, { $set: { title: req.body.title } });
        res.json(updatedWithdrawal);
    } catch (err) {
        res.json({ message: err });
    }
})

//Export
module.exports = router;