const express = require("express");
const app = express();
const port = 3000;



app.get("/",(req,res)=>{
    // const id = req.query.id;
    // const name = req.query.name;
    const{id ,name } = req.query;

    res.send(`<h1> Student id is: ${id}    Name is: ${name} </h1>`);
})


app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});
