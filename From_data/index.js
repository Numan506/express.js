const express = require("express");
const app = express();
const port = 3002;
const bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post("/req",(req,res)=>{
    const Name = req.body.name;
    const Age = req.body.age;
    const Dept = req.body.dept;
    res.send(`Name is: ${Name} Age is: ${Age} Dept is: ${Dept}`);
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})