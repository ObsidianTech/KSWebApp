/* eslint-disable no-console */
var express = require('express');
var cors = require('cors');

var app = express();
app.use(express.static(__dirname + "/dist/"));
app.use(cors);

app.get(/.*/, function(req,res) {
    res.sendFile(__dirname + "./dist/index.html")
});
app.listen(process.env.PORT || 5000);

console.log('server started ');