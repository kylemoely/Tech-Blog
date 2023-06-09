const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
    const response = await Post.findAll({
        limit:3,
        order: [['createdAt', 'DESC']]
    });
    const newposts = [];
    for(let x=0;x<response.length;x++){
        newposts.push(response[x].dataValues);
    }
    res.render('home', {
        newposts,
        loggedIn: req.session.loggedIn,
        username: req.session.username
    });
});

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/signup', (req, res) => {
    res.render('signup');
})

router.get('/dashboard', async (req, res) => {
    try{
        if(req.session.loggedIn && req.session.username){
            res.redirect(`/${req.session.username}`);
        } else{
            res.redirect('/login');
        }
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
})

router.get('/:user', async (req, res) => {
    try{
        const posts = await Post.findAll({
            where: { username: req.params.user},
            order: [['createdAt', 'DESC']]
        });
        const allPosts = [];
        for(let x=0;x<posts.length;x++){
            allPosts.push(posts[x].dataValues);
        }
        const isUserHome = req.params.user===req.session.username;
        res.render('dashboard', { allPosts, loggedIn: req.session.loggedIn, username: req.session.username, isUserHome })
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;