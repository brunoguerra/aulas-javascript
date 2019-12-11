const { Client } = require('pg')

const client = new Client({
    connectionString: 'postgres://toqhueijtfvgrb:5eaea1ce5e4b106003879586496826b461da3bacdfd2d97277851a850e4538ad@ec2-184-73-176-11.compute-1.amazonaws.com:5432/d6j6pl4huo7oig',
    ssl: true,
})
client.connect()

const query = client.query('CREATE TABLE IF NOT EXISTS people(id SERIAL PRIMARY KEY, name VARCHAR(100), email VARCHAR(100) not null)')
query.then(data => console.log('resolvido ', data))

