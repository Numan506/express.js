const express = require ("express");
const userRouter =require ("./routes/users.routers");
const app = express();

app.use("/user",userRouter);


app.use("/",(req,res)=>{
    res.send("<h2> i am home route </h2>")
    res.end();
})


app.use((req,res)=>{
    res.send("<h2>404 !!! is not valid ");
    res.end();
})





module.exports = app;