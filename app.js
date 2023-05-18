const express = require('express');
const createError = require('http-errors');

const routes = require('./src/routes/item');

const app = express();

app.use(express.json());

app.use('/', routes);

app.use((req, res, next) => {
  next(createError(404));
});

module.exports = app;
