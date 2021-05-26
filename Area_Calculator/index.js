const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3001;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/index.html");
})

app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname +"/triangle.html");
})

app.get("/circle",(req,res)=>{
    res.sendFile(__dirname +"/circle.html");
})




app.post("/triangle",(req,res)=>{
    const Base = req.body.base
    const Height = req.body.height
    const area = 0.5 * Base * Height;

    res.send(`Area of Triangle is:${area}`)
})

app.post("/circle",(req,res)=>{
    const radius = req.body.radius;
    
    const area = Math.PI * radius * radius;

    res.send(`Area of Circle is:${area}`)
})


app.listen(port,()=>{
    console.log(`sever is running at http://localhost:${port}`);
})