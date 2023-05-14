const router = require('express').Router();
router.get('/', (req, res) => {
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
    res.render('home', {
        loggedIn: req.session.loggedIn,
        username: req.session.username
    });
})

module.exports = router;