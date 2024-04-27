const express = require('express')
const app = express()
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port =process.env.PORT || 3000;


app.get('/', function (req, res) {
  res.send('Welcome to our hotel')
})


const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

app.listen(port,()=>{
  console.log(`app listening on port ${port}`)
})