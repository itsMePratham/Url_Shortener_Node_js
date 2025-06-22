const express = require('express');
 const app = express();

 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

 const { connectDB} = require('./connection');
 connectDB('mongodb://localhost:27017/URL_Shortner');


const prathamRouter = require('./routes/url');


 
 app.use("/urls",prathamRouter);



PORT = 3000;

app.listen(PORT ,()=>{

    console.log(`Server is running on port ${PORT}`);
})