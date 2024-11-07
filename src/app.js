const express = require('express');
const cors = require('cors');  // Adiciona esta linha
const sequelize = require('./config/database');
const treinadorRoutes = require('./routes/TreinadorRoutes');

const app = express();
app.use(express.json());
app.use(cors());  // Permite todas as origens

app.use('/', treinadorRoutes);

sequelize.sync()
    .then(() => console.log('Banco de dados sincronizado'))
    .catch((error) => console.error('Erro ao sincronizar o banco de dados:', error));

module.exports = app;
