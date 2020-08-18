const express=require('express')
const router=express.Router()
const RegisteredUser= require('../models/RegisteredUser,js')

router.get('/',async(req,res) => {
    try{
        const users = await RegisteredUser.find()
        res.json(users)
    }
    catch (err) {
        res.send('Error'+ err)
    }
})

router.get('/:name',async(req,res) => {
    try{
        const users= await RegisteredUser.findById(req.params.name)
        res.json(users)
    }
    catch (err) {
        res.send('Error'+ err)
    }
})


router.post('/', async(req,res) => {
    const registereduser = new RegisteredUser({
        name : req.body.name,
        tech : req.body.Email,
        sub: req.body.password
    })
    try{
        const a1= await registereduser.save()
        res.json(a1)
    }
    catch (err) {
        res.send('Error' + err)
    }
})

router.put('/', async(req,res) => {
    const alien = new Alien({
        name : req.body.name,
        tech : req.body.tech,
        sub: req.body.sub
    })
    try{
        const a1= await alien.save()
        res.json(a1)
    }
    catch (err) {
        res.send('Error' + err)
    }
})



module.exports=router
