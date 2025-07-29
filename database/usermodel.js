
const mongoose = require('mongoose');

// Replace with your actual URL and DB name
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'user';

// Connect to MongoDB
mongoose.connect(`${mongoUrl}/${dbName}`)
.then(() => console.log('MongoDB connected from User.js'))
.catch(err => console.error('Connection error:', err));

// Define schema
const userSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
  email:String,
  Password: String,
  role:String
});

// Export model
module.exports = mongoose.model('User', userSchema);
