const express = require('express')
const path = require('path')
// import {fileURLToPath} from 'url';
// import {dirname} from 'path'
const user = require('./usermodel')

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs');

app.get('/userdetali',async (req,res)=>{
     let findall = await user.find()
     return findall;
})
app.get('/create',async (req,res)=>{
    let createUser = await user.create({
        userName:"String1",
        Password:"String",
        email:"String@gmail.com"
    })
    res.send(createUser)
})

app.get('/updata',async (req,res)=>{
    let updata =await user.findOneAndUpdate({userName:"string"},{Password:"yourName"},{new:true})
    res.send(updata)
})
app.get('/read',async (req,res)=>{
    let findall = await user.find()
    let findone = await user.findOne({userName:"string1"})    
    res.send(findall)
})
app.get('/delete',async (req,res)=>{

    let findone = await user.findOneAndDelete({userName:"String1"})    
    res.send(findone)
})

app.use("/",(req,res)=>{
   res.render("userProfile")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});