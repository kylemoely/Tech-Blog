const router = require('express').Router();
router.get('/', (req, res) => {
    console.log(req.session);
    res.render('home', {loggedIn: req.session.loggedIn});
});

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/signup', (req, res) => {
    res.render('signup');
})

module.exports = router;