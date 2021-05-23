const express = require("express");
const router = express.Router(); 


router.get("/register",(req,res)=>{
    res.send("<h2> i am register route </h2>")
    res.end();
})

router.get("/login",(req,res)=>{
    res.send("<h2> i am login route </h2>")
    res.end();
})


module.exports = router;