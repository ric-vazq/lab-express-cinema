// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db');

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require('hbs');


const app = express();


// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

app.locals.title = `Cinema Ironhack`;

// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

const movies = require('./routes/movies')
app.use('/', movies);

const movieById = require('./routes/movie/:id')
app.use('/', movieById);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
