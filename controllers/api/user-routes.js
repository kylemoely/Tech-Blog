const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
    try{
        const newUser = await User.create({
            username: req.body.uname,
            password: req.body.confpword
        })

        req.session.save(() => {
            req.session.loggedIn =true;

            res.status(200).json(newUser);
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    try{
        // find user
        const checkUser = await User.findOne({where: { username: req.body.uname}});
        // if user exits
        if(checkUser){
            //check password
            const check = await checkUser.checkPassword(req.body.pword);
            // if password is correct
            if(check){
                req.session.save(() => {
                    //log them in
                    req.session.loggedIn=true;
                    //save their username to be used later
                    req.session.username=checkUser.username;
                    //return ok
                    res.status(200).json(checkUser);
                })
            } else{
                //Tell them wrong
                res.status(404).json('Incorrect username or password.');
            }
        } else {
            //Tell them wrong
            res.status(404).json('Incorrect username or password.');
        }
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;