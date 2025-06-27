const express = require('express');
 const app = express();
 const path = require('path');

 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

 const { connectDB} = require('./connection');
 connectDB('mongodb://localhost:27017/URL_Shortner');

// infroming the server that we are using ejs as a view engine
 app.set('view engine', 'ejs');
 app.set('views',path.resolve('./views'));



const prathamRouter = require('./routes/url');
const UIrouter = require('./routes/UIRender');

 
 app.use("/urls",prathamRouter);
  app.use("/views",UIrouter);


PORT = 3000;

app.listen(PORT ,()=>{

    console.log(`Server is running on port ${PORT}`);
})