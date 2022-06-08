const express = require('express');
const { urlToHttpOptions } = require('url');
const router = express.Router();
const balance = require('../models/balance');

//Get All balance


//Submit balance
router.post('/', async (req, res) => {
    const retBalance = JSON.stringify({
        'head': {
            'fromCtry': 'Rusland',
            'fromBank': 'Groep3',
            'toCtry': req.body.head.fromCrty,
            'toBank': req.body.head.fromBank
        },
        'body': {
            'acctNo': req.body.body.acctNo,
            'amount': 200000
        }
    });
    console.log('Incoming balance request');
    handlePostRequest(req, res, retBalance);
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
    */
    // console.log(req.body);

});

//Specific balance
router.get('/:balanceId', async (req, res) => {
    try {
        const balance = await balance.findById(req.params.balanceId);
        res.json(balance);
    }
    catch (err) { res.json({ message: err }); }

    // console.log(req.params.balanceId);
});


//Delete a specific balance
router.delete('/:balanceId', async (req, res) => {
    try {
        const removeBalance = await balance.remove({ _id: req.params.balanceId });
        res.json(removeBalance);
    } catch (err) {
        res.jsonp({ message: err });
    }

});

//Update balance
router.patch('/:balanceId', async (req, res) => {
    try {
        const updatedBalance = await balance.updateOne({ _id: req.params.balanceId }, { $set: { title: req.body.title } });
        res.json(updatedBalance);
    } catch (err) {
        res.json({ message: err });
    }
})

//Export
module.exports = router;