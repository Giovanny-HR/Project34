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

//Upadte paost
router.patch('/:postId', async(req,res) => {
    try{
        const patchpost = await urlToHttpOptions.();
    }catch(err){
        ({message:err});
    }
})

//Export
module.exports = router;