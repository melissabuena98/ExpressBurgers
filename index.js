var express = require('express');
var pug = require('pug');
var path = require('path');
var app = express();
var burgers = require('./burgers.json');
var desserts = require('./desserts.json');
var sides = require('./sides.json');

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function (req, res) {
  res.render('index', {
  });
});

app.get('/:viewname', function (req, res) {
  res.render(req.params.viewname, {
  "burgers":burgers,
  "desserts":desserts,
  "sides":sides
  });
});

app.listen(3000);