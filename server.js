const express = require('express');
const dotenv = require('dotenv').config({path:'config.env'});
const router = require('./routes');

const app = express();
const port = process.env.PORT || 8000;

// Enable the body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/',router);

app.listen(process.env.PORT || 8000,()=>{
    console.log(`server started ${port}`)
})