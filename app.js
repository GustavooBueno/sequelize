const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// Configuração do banco de dados e modelos
const db = require('./config/db');
const Tarefa = require('./models/Tarefa');

// Defina os modelos e sincronize com o banco de dados
db.sync()
  .then(() => {
    console.log('Banco de dados conectado');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });

// Rotas
const tarefasRoutes = require('./routes/tarefasRoutes');
app.use('/', tarefasRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
