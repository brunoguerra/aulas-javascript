const express = require('express')
const fetch = require('node-fetch')
const fs = require('fs')
const { routes } = require('./routes.js')
const cors = require('cors')
const { db } = require('./db')

var app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))  // enable for receive html form posts
app.use(express.json())

console.log('Ola Node.JS')


/* configura as rotas da nossa API */
routes(app)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
