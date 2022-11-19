const express = require('express')
const router = express.Router()

router.get('', (req, res) => {
    console.log("Home employee")
})


router.get('/tasks', (req, res) => {
    console.log("Tasks employee")
})

module.exports = router