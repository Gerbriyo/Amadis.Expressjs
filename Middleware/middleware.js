const express = require("express")
const app = express()

app.use(login) 

app.get("/",(req,res)=>{
    res.send("hello to all")
})
app.get("/about",(req,res)=>{
  res.send("Know about the about")
})

function login (res,req,next){
  console.log("way to go");
  next()
}
app.listen(3000)