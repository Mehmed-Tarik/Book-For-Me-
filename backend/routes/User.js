const router = require('express').Router()
let User = require('../models/User.model')

// GET USER 
router.route('/').get((req,res) => {
    User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req,res) => {
    const username = req.body.username
    const password = req.body.password

    const newUser = new User({
        username,
        password
        
    })

    newUser.save()
    .then(() => res.json('User added!' + newUser))
    .catch(err => res.status(400).json(`Error:  ${err}`))
})

module.exports = router