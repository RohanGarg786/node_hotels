const mongoose = require('mongoose');
const mongoURL ='mongodb://localhost:27017/hotels'


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