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
    
    console.log('Incoming withdraw request');

   
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
   

});

//Specific withdraw
router.get('/:withdrawId', async (req, res) => {
    try {
        const withdraw = await withdraw.findById(req.params.withdrawId);
        res.json(withdraw);
    }
    catch (err) { res.json({ message: err }); }

    // console.log(req.params.withdrawId);
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