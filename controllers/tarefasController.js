// controllers/tarefasController.js
const Tarefa = require('../models/Tarefa');

// Listar todas as tarefas
const listarTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.findAll();
    res.json(tarefas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar as tarefas' });
  }
};

// Criar uma nova tarefa
const criarTarefa = async (req, res) => {
  const { descricao, status } = req.body;

  try {
    const novaTarefa = await Tarefa.create({ descricao, status });
    res.json(novaTarefa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar a tarefa' });
  }
};

// Obter uma tarefa específica por ID
const obterTarefaPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.json(tarefa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter a tarefa' });
  }
};

// Atualizar uma tarefa por ID
const atualizarTarefa = async (req, res) => {
  const { id } = req.params;
  const { descricao, status } = req.body;

  try {
    let tarefa = await Tarefa.findByPk(id);
    if (!tarefa) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    tarefa.descricao = descricao;
    tarefa.status = status;
    await tarefa.save();

    res.json(tarefa);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar a tarefa' });
  }
};

// Excluir uma tarefa por ID
const excluirTarefa = async (req, res) => {
  const { id } = req.params;

  try {
    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    await tarefa.destroy();
    res.json({ message: 'Tarefa excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir a tarefa' });
  }
};

module.exports = {
  listarTarefas,
  criarTarefa,
  obterTarefaPorId,
  atualizarTarefa,
  excluirTarefa,
};
