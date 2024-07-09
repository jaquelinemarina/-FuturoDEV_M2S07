const Curso = require('../models/Curso')

class CursoController {

    async criar(req, res) {
        try {
            const dados = req.body

            if (!dados.nome || !dados.duracao) {
                return res.status(400).json({ mensagem: 'Nome e duração são obrigatórios' })
            }

            const curso = await Curso.create(dados) // comando para criar 
            return response.status(201).json(curso)

        } catch (error) {
            console.log(error)
            res.status(500).json({ mensagem: 'Erro ao criar curso' })
        }
    }

    async deletar(req, res) {
        try {
            const id = req.params.id
            const curso = await Curso.findByPk(id)

            if (!curso) {
                return res.status(404).json({ mensagem: 'Curso não encontrado' })
            }

            await curso.destroy() // comando para deletar
            return res.status(204).json()

        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao deletar curso' })
        }
    }

    async atualizar(req, res) {
        try {
            const id = req.params.id
            const dados = req.body
            const curso = await Curso.findByPk(id)

            if (!curso) {
                return res.status(404).json({ mensagem: 'Curso não encontrado' })
            }

            curso.nome = dados.nome
            curso.duracao = dados.duracao

            await curso.save() // comando para atualizar
            return res.json(curso)

        } catch (error) {
            console.log(error)
            res.status(500).json({ mensagem: 'Erro ao atualizar curso' })
        }
    }

    async listar(req, res) {
        try {
            const cursos = await Curso.findAll() // comando para listar todos
            return res.json(cursos)

        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao listar cursos' })
        }
    }

    async listarPorId(req, res) {
        try {
            const id = req.params.id
            const curso = await Curso.findByPk(id) // comando para buscar por id

            if (!curso) {
                return res.status(404).json({ mensagem: 'Curso não encontrado' })
            }

            return res.json(curso)

        } catch (error) {
            res.status(500).json({ mensagem: 'Erro ao buscar curso' })
        }
    }
}
module.exports = new CursoController()