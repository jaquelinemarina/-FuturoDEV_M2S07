const express = require('express')
const cors = require('cors') // aceita requisições de outros IPs
const routes = require('./routes/routes') // importa as rotas
const connection = require('./database/connection')

const PORT_API = process.env.PORT_API // pega da variável de ambiente

class Server {
    constructor(server = express()) {
        this.middlewares(server)
        this.database()
        server.use(routes)
        this.initializeServer(server)
    }

    // middlewares fica entre a requisição e a resposta
    async middlewares(app) {
        app.use(cors())
        app.use(express.json())
        console.log('Middlewares inicializados.')
    }

    async database() {
        try {
            await connection.authenticate() // testa a conexão - vem do sequelize
            console.log('Conectado ao banco de dados.')
        }
        catch (error) {
            console.log('Erro ao conectar ao banco de dados.')
            console.log(error) // mostra qual é o erro
        }
    }

    // inicializa o servidor com a porta definida no .env
    async initializeServer(app) {
        app.listen(PORT_API, () => {
            console.log(`Servidor conectado na porta ${PORT_API}`)
        })
    }
}

module.exports = { Server } 