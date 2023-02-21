require ("dotenv").config();
const express = require('express')
bodyParser=require("body-parser");
const db = require("./config/db")
const Userouter = require('./route/user.route')
const app = express();
db();


app.use(express.json());
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
});

app.use('/betme', Userouter);

app.listen(3000, (req, res) => {
    console.log('listening on port 3000')
});