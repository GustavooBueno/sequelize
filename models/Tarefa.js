// models/Tarefa.js
const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Tarefa = db.define('Tarefa', {
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = Tarefa;
