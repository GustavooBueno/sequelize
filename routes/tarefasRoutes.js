// routes/tarefasRoutes.js
const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasController');

// Listar todas as tarefas
router.get('/tarefas', tarefasController.listarTarefas);

// Criar uma nova tarefa
router.post('/tarefas', tarefasController.criarTarefa);

// Obter uma tarefa específica por ID
router.get('/tarefas/:id', tarefasController.obterTarefaPorId);

// Atualizar uma tarefa por ID
router.put('/tarefas/:id', tarefasController.atualizarTarefa);

// Excluir uma tarefa por ID
router.delete('/tarefas/:id', tarefasController.excluirTarefa);

module.exports = router;
