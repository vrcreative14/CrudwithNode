const express=require('express')
const mongoose=require('mongoose')

const app=express()
const url='mongodb+srv://creativehat:cretivity@234@cluster0.4gbqh.mongodb.net/Original?retryWrites=true&w=majority'

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open',() => {
    console.log('connected..')
})

app.use(express.json())
app.use((req,res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization");
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE')
        return res.status(200).json({});
    }
    next();
})

const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)

app.listen(3000, function () {
    console.log('Server started')
})