const express = require('express')
const fetch = require('node-fetch')
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

  const buf = Buffer.from('user:ca6297fa3-us14')
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

  res.redirect('/sucesso')

})

app.get('/sucesso', function(req, res) {
  res.sendFile(__dirname + '/sucesso.html')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
