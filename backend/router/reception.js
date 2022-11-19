const express = require('express')
const router = express.Router()

router.get('', (req, res) => {
    console.log("Home reception")
})

router.get('/booking', (req, res) => {
    console.log("Booking reception")
})

router.get('/tasks', (req, res) => {
    console.log("Tasks reception")
})

module.exports = router