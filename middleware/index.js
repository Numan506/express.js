const express = require("express");
const app = express();
const port = 3002;

const myMiddleWare =(req,res,next)=>{

    console.log("Hello Bangladesh");
    req.time = new Date(Date.now());
    next();
}


app.use(myMiddleWare);


app.get("/",(req,res)=>{
    res.send("I am Home route");
    console.log(`Now time is: ${req.time}`)
})



app.get("/register",(req,res)=>{
    res.send("I am Register route");
    console.log(`Now time is: ${req.time}`)
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})