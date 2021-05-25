const express = require("express");
const app = express();
const port = 3003;
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register",(req,res)=>{
   res.sendFile(__dirname +"/index.html");
    
})
app.post("/register",(req,res)=>{
    var Name = req.body.fullName;
    var Age = req.body.age;
    var Dept = req.body.dept;
    res.send(`Your Name is: ${Name} <br/> Age is ${Age} <br/> Dept is: ${Dept}`);
     
 })
 


app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})