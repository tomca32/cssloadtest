var app = require('express')();
var path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/styles.css', function(req, res) {
  setTimeout(function(){
    res.sendFile(path.join(__dirname, 'styles.css'));
  }, 10000);
});

app.get('/script.js', function(req, res) {
  res.sendFile(path.join(__dirname, '/script.js'));
});

var server = app.listen(3000, function() {

});