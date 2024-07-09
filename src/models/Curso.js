const { DataTypes } = require('sequelize')
const connection = require('../database/connection')

const Curso = connection.define('cursos', {
    // não precisa passar o id, createdAt e updatedAt pois o sequelize entende por padrão
    nome: {
        type: DataTypes.STRING
    },
    duracao: {
        type: DataTypes.INTEGER
    }
})
module.exports = Curso