'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  //CRIANDO
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'cursos',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true, // id
          autoIncrement: true, // cria o id crescente
          allowNull: false // não pode ser nulo
        },
        nome: {
          type: Sequelize.STRING(50), // varchar(50) | padrão 255
          allowNull: false // se não especificado, é true
        },
        duracao: {
          type: Sequelize.INTEGER, // número inteiro
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE, // coloca data e hora 
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      }
    )
  },

  //DESFAZENDO
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cursos')
  }
}