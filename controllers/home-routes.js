const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
    res.render('home', {
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

router.get('/:user', async (req, res) => {
    try{
        // find User by username (primary key), from url user param
        const userData = await User.findByPk(req.params.user,{
            // include all of the Posts associated with this user
            include: [
                {
                    model: Post,
                    attributes: [
                        'id',
                        'username',
                        'title',
                        'content',
                        'createdAt'
                    ]
                } 
            ]
        });
        // Get the plain JS object for the User
        const pageUser = await userData.get({ plain: true });
        res.render('dashboard', { pageUser, loggedIn: req.session.loggedIn, username: req.session.username })
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;