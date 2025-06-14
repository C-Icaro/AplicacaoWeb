// routes/index.js
const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/TarefaController');

// Rotas para o CRUD de tarefas
router.post('/tarefas', TarefaController.criarTarefa);
router.get('/tarefas', TarefaController.listarTarefas);
router.get('/tarefas/:id', TarefaController.buscarTarefaPorId);
router.put('/tarefas/:id', TarefaController.editarTarefa);
router.delete('/tarefas/:id', TarefaController.excluirTarefa);

module.exports = router;