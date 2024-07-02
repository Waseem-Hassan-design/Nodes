const mongoose = require('mongoose');
//const uri = "mongodb+srv://thapa:UxruaOfEKo99Bqtm@THAPAAPI.ulcljt9.mongodb.net/ThapaApi?retryWrites=true&w=majority";
//uri ="mongodb+srv://thapa:n48TNfKCrYJ9SMcc@thapaapi.ulcljt9.mongodb.net/ThapaApi?retryWrites=true&w=majority";
// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 50000 // Increase timeout to 50 seconds
// });


// const connectDB = (uri) => {
//   //console.log("connect db.........");
//   return mongoose.connect(uri,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 30000, // 30 seconds
//     socketTimeoutMS: 45000 // 45 seconds
//   });
// };
const mongoose = require('mongoose');

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 45000 // 45 seconds
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};

module.exports = connectDB;
