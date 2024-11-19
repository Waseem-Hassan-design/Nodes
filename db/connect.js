const mongoose = require('mongoose');
//const uri = "mongodb+srv://thapa:UxruaOfEKo99Bqtm@THAPAAPI.ulcljt9.mongodb.net/ThapaApi?retryWrites=true&w=majority";
//uri ="mongodb+srv://thapa:n48TNfKCrYJ9SMcc@thapaapi.ulcljt9.mongodb.net/ThapaApi?retryWrites=true&w=majority";

const connectDB = (uri) => {
  //console.log("connect db.........");
  return mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
