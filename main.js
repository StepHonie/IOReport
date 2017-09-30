var express = require('express');
var path = require('path');
var app =  express();
var bodyParser = require('body-parser');

var index = require('./routes/index');
var email = require('./routes/email');
var post = require('./routes/post');

app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/',index);
app.use('/post',post);
app.use('/email',email);


app.listen(3001);

console.log("I'm listening port: 3001");

module.exports = app;
