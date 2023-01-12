const express = require('express')
const router = express.Router()
const Task = require('../model/TasksModel');
const Bills = require('../model/BillModel')
const User = require('../model/UserModel');
const conn = require('../model/db')
const db = require('../model/db')


router.get('/booking', (req, res) => {
    console.log("Booking admin")
})


//Rutas tasks
//Get tasks
router.get('/tasks', async (req, res) => {
    try{
        await db()
    Task.find({},(err,tasks)=>{
        if(err){
            console.log(err);
        }else{
            res.status(202).json(tasks);
        }
    })
    }catch(err){
        console.log(`An error has ocurred ${err}`)
    }
})
//post tasks
router.post('/tasks', async (req, res) => {
    try{
        await db()
        const task = new Task({
            employeeId: req.body.employeeId,
            description: req.body.description,
            date: Date.now()
        })
        task.save()
            .then(() => res.send("Added Task"))
            .catch(err => console.log(`There has been error ${err}`));
    }catch (err){
        console.log(`An error has ocurred ${err}`)
    }
})

//Edit tasks
router.put('/tasks/edit/:id',async (req, res) => {
    try{
        await db()
        Task.findOneAndUpdate({ "_id": req.params.employeeId },
        {
            $set: {
                employeeId: req.body.employeeId,
                description: req.body.description
            }
        })
        .then(() => res.send("Updated task"))
        .catch(err => console.log("There is an error"));
    }catch(err){
        console.log(`An error has ocurred ${err}`)
    }
});
//delete tasks
router.delete('/tasks/delete/:id',async (req, res) => {
    try{
        await db()
        Task.findOneAndDelete({"_id": req.params.employeeId})
        .then(()=>res.send("Deleted task"))
        .catch(err => console.log("There is an error"));
    }catch(err){
        console.log(`An error has ocurred ${err}`) 
    }
});


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