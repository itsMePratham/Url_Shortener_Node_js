const express = require('express');
const router = express.Router();

const { createUrl, getUrl ,getAnalytics } = require('../controllers/urlControllers');

router.post("/",createUrl)

router.get("/:shortId", getUrl);

router.get("/analytics/:shortId" , getAnalytics);
module.exports = router;