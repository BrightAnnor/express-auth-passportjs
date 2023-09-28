const express = require('express');
const dotenv = require('dotenv');
//configuration
dotenv.config();
const dbConnect = require('./dbConnect');
const User = require('./user')

// server port
const port = process.env.port

//server
const app = express();

app.use(express.urlencoded({extended:false}));

//SignUp(create an account)
app.post('/signup',async (req,res)=>{
    try {
        const{userName,password,email,name,confirm_password} = req.body

        if(password === confirm_password){
        // creating the user
        const result = await User.create({userName,password,email,name})

            if(result)
                return res.send('Account created Successfully');}
        else res.send('Incorrect password')
        
        
    } catch (error) {
        res.send('Unable to handle request')
        
    }
})




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