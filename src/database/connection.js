const { Sequelize } = require('sequelize') // ORM
const databaseConfig = require('../config/database.config') // configuração do banco de dados

const connection = new Sequelize(databaseConfig) // conexão com o banco de dados

module.exports = connection