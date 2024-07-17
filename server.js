const express =require("express")
const app = express()

app.use(login) 

app.use(express.static("public")) //nsmr.html
app.use(express.urlencoded())

app.set("view engine", "ejs")

app.get("/", (req,res)=>{ 
    console.log("hi");
    res.status(500).send("HI") 
}) 

app.get("/about",(req,res)=>{       //about
  console.log(" to ");
  res.send("Know about the about")
})

app.get("/auth", authentication,(req,res)=>{    // auth?admin=true
  console.log(" logged in ");
  res.send("You have got the access")
})

function login (res,req,next){
  console.log("way to go");
  next()
}
// function authentication (req,res,next){
//   console.log(" admin rights");
//   next()
// }

function authentication (req, res, next){
  if (req.query.admin ==='true'){
    next()
    return
  }else{
    res.status(401).send('Unauthorized');
  }
}

app.get("/login",(req,res)=>{
  res.send("<form method='POST'><input name='username' type='text'><input name='password' type='data'><button>Login</button></form>")
})

app.post('/login',(req,res) =>{
  console.log(req.body);
  res.send(`you are welcome in the site`)
})

const userRouter = require("./routers/users")
app.use("/users", userRouter) 

app.listen(3000)