const { Client } = require('pg')
// database connection
const client = new Client({
    connectionString: 'postgres://toqhueijtfvgrb:5eaea1ce5e4b106003879586496826b461da3bacdfd2d97277851a850e4538ad@ec2-184-73-176-11.compute-1.amazonaws.com:5432/d6j6pl4huo7oig',
    ssl: true,
})
client.connect()

const queryCreate = client.query('CREATE TABLE IF NOT EXISTS people(id SERIAL PRIMARY KEY, name VARCHAR(100), email VARCHAR(100) not null)')
queryCreate.then(data => console.log('Tabela People criada ', data))

const queryCreateCards = client.query('CREATE TABLE IF NOT EXISTS cards(id SERIAL PRIMARY KEY, title VARCHAR(100) not null, description VARCHAR(100) null)')
queryCreateCards.then(data => console.log('Tabela People criada ', data))

exports.db = client