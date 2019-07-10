const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const passport=require('passport')
const ejs=require('ejs')

//bring all routes
const auth=require('./routes/api/auth')

const app=express()

//setup for ejs
app.set('view engine','ejs')

//Middleware for bodyparser
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


//mongoDB configuration
const db=require('./setup/myurl').mongoURL


//Attempt to connect to database
mongoose
    .connect(db)
    .then(()=>console.log('MongoDB connected successfully'))
    .catch(err=>console.log(err));

//Passport middleware    
app.use(passport.initialize())

// //Config for JWT Strategy
// require('./strategies/jsonwtstrategy')(passport)


//just for testing route
app.get('/',(req,res)=>{
    res.render('index')
    //res.send('connected')
});


//Asset page route
app.get('/add-asset',(req,res)=>{
    res.render('asset')
    //res.send('connected')
});


//task page route
app.get('/add-task',(req,res)=>{
    res.render('task')
    //res.send('connected')
});

//worker page route
app.get('/add-worker',(req,res)=>{
    res.render('worker')
    //res.send('connected')
});

//Allocate task page route
app.get('/allocate-task',(req,res)=>{
    res.render('allocatetask')
    //res.send('connected')
});

//Asset page route
app.get('/get-worker-task',(req,res)=>{
    res.render('gettask')
    //res.send('connected')
});


//actual routes
app.use('/api/auth',auth)
// app.use('/api/profile',profile)


const port=process.env.PORT || 3002

app.listen(port,()=>console.log(`App is running at port ${port}...`))














