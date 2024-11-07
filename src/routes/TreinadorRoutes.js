const express = require('express');
const treinadorController = require('../controllers/TreinadorController');
const router = express.Router();

router.post('/treinadores', treinadorController.criarTreinador);
router.get('/treinadores', treinadorController.listarTreinadores);
router.post('/treinadores/:treinadorId/pokemons', treinadorController.adicionarPokemon);

module.exports = router;
