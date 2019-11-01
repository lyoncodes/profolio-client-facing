// dependencies
const express = require('express');
const superagent = require('superagent');
const path = require('path');

//modules
const routes = require('./public/js/routes.js');

//envi. variables
require('dotenv').config();

// HTTP server
const app = express();

// PORT
const PORT = process.env.PORT || 3000;

// Middleware and View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static('public'));

//Routes
app.use('/', routes);

//App Listen
app.listen(PORT, () => console.log(`we here for you on port ${PORT}`));

module.exports = app;