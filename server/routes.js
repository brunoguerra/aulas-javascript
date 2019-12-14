const { db }  = require('./db')


exports.routes = (app) => {
    function home(req, res) {
        console.log('Chamou o home')
        // res.send('<b>Nosso primeiro ExpressJS</b>');
        res.sendFile(__dirname + '/index.html')
    }
    app.get('/', home)

    app.post('/objectives', (req, res) => {
        console.log(req.body)
        const title = req.body.title
        const description = req.body.description

        query = db.query('INSERT INTO cards (title, description) values (\'' + title + '\', \'' + description + '\')')
        query.then(data => {
            console.log('data successful', data)
            res.json({
                status: 'OK!',
                statusCode: 200,
            })
        })
        query.catch(err => {
            console.log('Error on insert card', err)
            res.json({
                status: 'ERROR server',
                statusCode: 500,
            })
        })
    })


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
        query = db.query('INSERT INTO people (name, email) values (\'' + name + '\', \'' + email + '\')')
        query.then(data => {
            console.log('data successful', data)
            res.redirect('/sucesso')
        })
        
        
        
    })
    
    app.get('/sucesso', function(req, res) {
        res.sendFile(__dirname + '/sucesso.html')
    })

}