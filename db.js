const mongoose = require('mongoose');
require('dotenv').config();
// const mongoURL =process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL


mongoose.connect(mongoURL,{
    useNewUrlparser:true,
    useUnifiedTopology:true
})

const db =mongoose.connection;

db.on('connected',()=>{
    console.log('connected to MongoDb server')
})

db.on('error',()=>{
    console.log('Error occured')
})

db.on('disconnected',()=>{
    console.log('disconnected to MongoDb server')
})

module.exports=db;