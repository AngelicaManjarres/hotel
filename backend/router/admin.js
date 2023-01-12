const express = require('express')
const router = express.Router()
const Task = require('../model/TasksModel');
const User = require('../model/UserModel');

const Bills = require('../model/BillModel')
const conn = require('../model/db')
const db = require('../model/db')

router.get('/booking', (req, res) => {
    console.log("Booking admin")
})

//Rutas tasks
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

router.get('/employees',async(req,res)=>{
    try{
        await db()
        User.find({},(err,users)=>{
        if(err){
            console.log(err);
        }else{
            res.status(202).json(users);
        }
    })
    }catch(err){
        console.log(`An error has ocurred ${err}`)
    }
})
module.exports = router