const express = require('express')
var app = express()
app.use(express.urlencoded({ extended: false }))

console.log('Ola Node.JS')

function home(req, res) {
  // res.send('<b>Nosso primeiro ExpressJS</b>');
  res.sendFile(__dirname + '/index.html')
}

app.get('/', home)

app.post('/salvar', function(req, res) {
  console.log('Entrou em salvar')
  console.log(req.url)
  console.log(req.body)

  res.redirect('/sucesso')

})

app.get('/sucesso', function(req, res) {
  res.sendFile(__dirname + '/sucesso.html')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
