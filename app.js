const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const route = require('./routes/index');

// Let Body parser pull request payloads into body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to be Pug/Jade, whichever.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// set static file serving path
app.use(express.static(path.join(__dirname, 'public')));

// Inject all our Route definitions.
app.use('/', route);

module.exports = app;