require ("dotenv").config();
const express = require('express')
bodyParser=require("body-parser");
const db = require("./config/db")
const router = require('./route/user.route')
const app = express();
db();

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

app.post('/signup', (req, res)=>{
    res.send('Thanks for Subscribing')
})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3000);


console.log("Listening on PORT 3000");