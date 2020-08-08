var createError = require('http-errors');
var express = require('express');
var path = require('path');
app.use(express.json());
var indexRouter = require('./routes/index');
var studentsRouter = require('./routes/students');
var coursesRouter = require('./routes/courses');

var app = express
app.listen(PORT,()=>console.log(`server is running at the port ${port}`));
module.exports = app;