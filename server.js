// dependencies
const path = require('path');
const express = require('express');
const superagent = require('superagent');

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
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.set('view engine', 'pug');
app.use(express.static('public'));

//Routes
app.use('/', routes);

//App Listen
app.listen(PORT, () => console.log(`we here for you on port ${PORT}`));

module.exports = app;