const express = require('express');
const connectDB = require('./config/db');
const funcionarioRoutes = require('./routes/funcionarioRoutes');
const cors = require('cors');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

// Conexão com o MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // Substitui o body-parser

// Rotas
app.use(funcionarioRoutes); // Adiciona as rotas de funcionários


// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
