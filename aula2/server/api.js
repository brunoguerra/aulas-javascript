const express = require('express')
const fetch = require('node-fetch')
const fs = require('fs')
const { Client } = require('pg')

var app = express()
app.use(express.urlencoded({ extended: false }))

// database connection
const client = new Client({
  connectionString: 'postgres://toqhueijtfvgrb:5eaea1ce5e4b106003879586496826b461da3bacdfd2d97277851a850e4538ad@ec2-184-73-176-11.compute-1.amazonaws.com:5432/d6j6pl4huo7oig',
  ssl: true,
})
client.connect()

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

  // Exemplo
  // fs.appendFile(
  //   __dirname + '/cadastro.txt',
  //   JSON.stringify(req.body), 
  //   function (err) {
  //     console.log('Arquivo escrito')
  //   }
  // )

  const nome_arquivo = __dirname + '/cadastro.txt'
  const dados = JSON.stringify(req.body)
  function retorno_do_arquivo(err) {
    if (err) {
      console.log('Erro ao escrever ', err.message)
    }
    console.log('Arquivo escrito')
  }
  fs.appendFile(nome_arquivo, dados+'\n', retorno_do_arquivo)

  const buf = Buffer.from('user:dd93df25787c1741901e593ca6297fa3-us14')
  const encodedData = buf.toString('base64')
  
  // mailcimp.saveMember(req.body)
  fetch('https://us14.api.mailchimp.com/3.0/lists/20ab069dfb/members', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + encodedData,
    },
    body: JSON.stringify({
      email_address: req.body.email,
      status: 'subscribed',
      merge_fields: { fname: req.body.name }
    })
  })
  .then(response => response.json())
  .then(json => console.log(json))

  const name = req.body.name
  const email = req.body.email
  query = client.query('INSERT INTO people (name, email) values (\'' + name + '\', \'' + email + '\')')
  query.then(data => {
    console.log('data successful', data)
    res.redirect('/sucesso')
  })



})

app.get('/sucesso', function(req, res) {
  res.sendFile(__dirname + '/sucesso.html')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
