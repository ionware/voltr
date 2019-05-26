const mongoose = require('mongoose');
require('dotenv').config({path: ".env"});
const app = require('./app');

// Read the set Port from env file.
const PORT = process.env.APP_PORT || 3000;
// Light our engines up, Captain!!
app.listen(PORT, function() {
    console.log('Application now listening on PORT ' + PORT);
});