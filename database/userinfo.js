const mongodb = require('mongoose')
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'userinfo';
mongodb.connect(`${mongoUrl}/${dbName}`)
const userinfo =new mongodb.Schema({
    userName:String,
    email:String,
    age:Number,
    name:String,
    phoneNum:Number,
    activeDay:Number,
    totalTime:Number
})
module.exports = mongodb.model('userInfo',userinfo)