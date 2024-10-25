const express = require('express');
const router = express.Router();

const pokemonController = require('../controller/PokemonController');

router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);
router.post('/criar', pokemonController.createPokemon);

module.exports = router;