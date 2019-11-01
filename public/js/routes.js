const express = require('express');
const router = express.Router();
const callback = require('./app.js');

router.get('/', callback.home);

module.exports = router; 