const express = require("express");
const app = express();
const port = 3001;


app.get("/",(req,res)=>{
    // const Name = req.params.name;
    // const Id = req.params.id;
   const Id = req.header("id");
   const Age = req.header("age");
    res.send(`<h1>Id is: ${Id} <br/> Age is: ${Age}</h1>`);

})

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})