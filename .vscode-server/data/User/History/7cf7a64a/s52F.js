const express = require('express');
const { urlToHttpOptions } = require('url');
const router = express.Router();
const withdraw = require('../models/withdraw');

//Get All withdraw


//Submit withdraw
router.post('/', async (req, res) => {
    const retwithdraw = JSON.stringify({
        'head': {
            'fromCtry': 'Rusland',
            'fromBank': 'Groep3',
            'toCtry': String,
            'toBank': String
        },
        'body': {
            'success': Bool,
            'acctNo': String,
            'balance': Intege
        }
    });
    console.log('Incoming withdraw request');
    handlePostRequest(req, res, retwithdraw);
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

    /*.then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
    */
    // console.log(req.body);

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