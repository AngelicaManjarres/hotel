const express = require('express')
const router = express.Router()


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



module.exports = router