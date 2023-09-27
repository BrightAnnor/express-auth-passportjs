const express = require('express');
const dotenv = require('dotenv');
//configuration
dotenv.config();
const dbConnect = require('./dbConnect');

// server port
const port = process.env.port

//server
const app = express();




//server listening
const startServer = ()=>{
    try {
        app.listen(port,()=>{
            console.log(`server runing on http://localhost:${port}`);
            dbConnect.authenticate()
        })
    } catch (e) {
        console.log(e)
        
    }
}
startServer()