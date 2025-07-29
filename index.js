const express = require('express');
const path = require('path');

const user = require("./database/usermodel")
//const userInfo = require("./database/userinfo")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


app.post('/create',async (req,res)=>{
     let {email,username,password} = req.body;
     
     const userExists = await user.findOne({ username });
     if (userExists) {
    return res.send("Username already exists");
     }
    else{
        await user.create({
         userName:username,
         Password:password,
         email:email
     })
    res.send("Username not exists");
    res.redirect("/")
    }
 })

app.post('/signup', async (req, res) => {
  let { userName, email, password} = req.body;

  const userExists = await User.findOne({ userName });

  if (userExists) {
    return res.send("Username already exists");
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await user.findOne({ userName: username });

    if (!existingUser) {
      return res.json(2); // Username not found
    }

    if (existingUser.Password !== password) {
      return res.json(1); // Incorrect password
    }

    return res.json(0); // Login success

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

 app.get('/read', async (req, res) => {
  try {
    const alluser = await user.find();
    res.json(alluser); // Send JSON response
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/home',(res,req)=>{
   res.render("home")
})

app.get('/userVaildation',async (req,res)=>{
     let alluser = await user.find()
    res.render("login",{user:alluser})
 })

app.get("/",(req,res)=>{
    res.render("index")
 }) 
 
app.get("/loginAndSignup",(req,res)=>{
  res.render("login")
})

app.post("/createprofile",(req,res)=>{
  res.render("userProfile")
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});