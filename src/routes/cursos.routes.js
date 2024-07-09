const { Router } = require('express')
const CursoController = require('../controllers/CursoController')

const cursosRoutes = new Router()

cursosRoutes.post('/', CursoController.criar)
cursosRoutes.delete('/:id', CursoController.deletar)
cursosRoutes.put('/:id', CursoController.atualizar)
cursosRoutes.get('/', CursoController.listar)
cursosRoutes.get('/:id', CursoController.listarPorId)
module.exports = cursosRoutes