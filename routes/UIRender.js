const express = require('express');
const UIrouter = express.Router();

const { showViews ,submitFormDetails} = require('../controllers/ViewsControllers');



UIrouter.get('/', showViews  )

UIrouter.get('/submitFormDetails', submitFormDetails);


module.exports = UIrouter;