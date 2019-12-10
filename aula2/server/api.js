const express = require('express')
var app = express()

console.log('Ola Node.JS')

function home(req, res) {
    // res.send('<b>Nosso primeiro ExpressJS</b>');
    res.sendFile(__dirname + '/index.html')
  }

app.get('/', home);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
