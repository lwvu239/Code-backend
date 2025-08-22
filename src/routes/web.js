const express = require('express');
const router = express.Router();
const {getHomePage, getTest} = require('../controller/homeController')


// router.Method('/route', handle);
router.get('/', getHomePage);

router.get('/test', getTest);

module.exports = router;