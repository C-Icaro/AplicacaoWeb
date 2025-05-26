// controllers/TarefaController.js
const TarefaModel = require('../models/TarefaModel');

// Criar uma nova tarefa
exports.criarTarefa = async (req, res) => {
  const { nome, descricao } = req.body;

  try {
    const tarefa = await TarefaModel.criar(nome, descricao);
    res.status(201).json(tarefa);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Listar todas as tarefas
exports.listarTarefas = async (req, res) => {
  try {
    const tarefas = await TarefaModel.listar();
    res.status(200).json(tarefas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Buscar uma tarefa específica por ID
exports.buscarTarefaPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const tarefa = await TarefaModel.buscarPorId(id);
    if (!tarefa) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(tarefa);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Editar uma tarefa
exports.editarTarefa = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, status } = req.body;

  try {
    const tarefa = await TarefaModel.editar(id, nome, descricao, status);
    if (!tarefa) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(tarefa);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Excluir uma tarefa
exports.excluirTarefa = async (req, res) => {
  const { id } = req.params;

  try {
    const tarefa = await TarefaModel.excluir(id);
    if (!tarefa) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json({ message: 'Tarefa excluída com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
