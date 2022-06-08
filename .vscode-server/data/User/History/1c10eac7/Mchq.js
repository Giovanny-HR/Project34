const express = require('express');
const { urlToHttpOptions } = require('url');
const router = express.Router();
const Post = require('../models/Post');

//Get All post
router.get('/', async(req, res) => {
    try{
        const post = await Post.find().limit(10);
        res.json(post);
    }catch(err){
        res.json({message :err});
    }
    // res.send('We are on post');
}); 

//Submit post
router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);        
    }catch (err) {
        res.json({ message: err});
    }
    
    /*.then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
    */
    // console.log(req.body);

});

//Specific post
router.get('/:postId', async(req,res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch(err){res.json({message: err});}
    
    // console.log(req.params.postId);
});


//Delete a specific post
router.delete('/:postId', async(req,res) => {
    try{
        const removePost = await Post.remove({ _id: req.params.postId });
        res.json(removePost);
    }catch(err){
        res.jsonp({message:err});
    }
    
});

/*
//Upadte post
router.patch('/:postId', async(req,res) => {
    try{
        const updatedPost = await Post.updateMany({_id: req.params.postId}, { $set: {title: req.body.title}});
        res.json(updatedPost);
    }catch(err){
       res.json({message:err});
    }
})
*/

//Upadte post
router.patch('/:postId', async(req,res) => {
    try{
        const updatedPost = await Post.updateOne({}, { $set: {title: req.body.title}}, {$set: {saldo: req.body.saldo}});
        res.json(updatedPost);
    }catch(err){
       res.json({message:err});
    }
})



//Export
module.exports = router;