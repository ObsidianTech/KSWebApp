/* eslint-disable no-console */
var express = require('express');
var serveStatic = require('serve-static');
var cors = require('cors');

var app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(cors);

app.listen(process.env.PORT || 5000);

console.log('server started ');