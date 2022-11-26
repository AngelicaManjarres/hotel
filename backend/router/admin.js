const express = require('express')
const router = express.Router()
const Bills = require('../model/BillModel')
const conn = require('../model/db')
const db = require('../model/db')


router.get('/booking', (req, res) => {
    console.log("Booking admin")
})


//Rutas tasks
router.get('/tasks', async (req, res) => {
    
})

router.post('/tasks', (req, res) => {
    console.log("Tasks admin")
})

router.delete('/tasks', (req, res) => {
    console.log("Tasks admin")
})


//Billing routing
router.get('/billing', async(req, res) => {
    try {
        await db()
        Bills.find({}, (err, bills) => {
            if(err) {
                console.log(err)
            } else {
                res.json(bills)
            }
        })

    }
    catch(err) {
        console.log(err)

    }
    
})

router.post('/billing', async(req, res) => {
    res.json('post bills')
})


router.put('/billing', async(req, res) => {
    res.json('post bills')
})


router.delete('/billing', async(req, res) => {
    res.json('gpost bills')
})




module.exports = router