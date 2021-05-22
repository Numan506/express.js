const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("I am get home route")
    res.end();
});


app.post("/",(req,res)=>{
    res.send("I am post route")
    res.end();
})


app.put("/",(req,res)=>{
    res.send("I am put route")
    res.end();
})

app.delete("/",(req,res)=>{
    res.send("I am delete route")
    res.end();

})








module.exports = app;