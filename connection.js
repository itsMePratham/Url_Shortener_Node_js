const mongoose = require('mongoose');

 const connectDB = async (urlprams) => {
    try{

        await mongoose.connect(urlprams);
        console.log('MongoDB connected successfully');
    }
    catch(error){
        console.error('Error connecting to MongoDB:', error);
        
    }
 }

module.exports = {connectDB};