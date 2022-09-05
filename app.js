const path = require('path');

const express = require('express');

const cors = require('cors')
const bodyParser = require('body-parser');

const sequelize= require('./util/database');
const User=require('./models/user');
const adminRoutes = require('./routes/admin');

const app=express()

app.use(cors());


// const adminRoutes = require('./routes/admin');
app.use(bodyParser.json({ extended: false }));

 app.use(bodyParser.urlencoded({ extended: false }));



// app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
console.log('abc')
 

sequelize.sync()
.then(result=>{ //.sync() method basically checks whether your table exists already in your mySQL and if not, it run a CREATE TABLE statement
    //console.log(result);
app.listen(8000);
// console.log('5');
})
.catch(err=>{
console.log(err);
// console.log('6')
})
