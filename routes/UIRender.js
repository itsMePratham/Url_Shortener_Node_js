const express = require('express');
const UIrouter = express.Router();

const { showViews } = require('../controllers/ViewsControllers');



UIrouter.get('/', showViews  )


module.exports = UIrouter;