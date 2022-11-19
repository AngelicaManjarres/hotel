const express = require('express')
const router = express.Router()
const User = require('../model/UserModel')
const conn = require('../model/db')
const session = require('express-session')
let state

router.post('/', async (req, res) => {
    try {
        await conn()
        User.findOne({username: req.body.username, password: req.body.password}, (err, user) => {
            if(err) {
                console.log(err)
                
            } else {
                console.log(user)
                state=req.session
                res.json(user)
                console.log(state)
            }
        })

    }
    catch(err) {
        console.log(`There's been an errors ${err}`)

    }
    
})

module.exports = router