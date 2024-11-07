const Treinador = require('../models/Treinador');
const Pokemon = require('../models/Pokemon');

const TreinadorController = {
    async criarTreinador(req, res) {
        try {
            const treinador = await Treinador.create(req.body);
            res.status(201).json(treinador);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async listarTreinadores(req, res) {
        try {
            const treinadores = await Treinador.findAll({
                include: { model: Pokemon, as: 'pokemons' },
            });
            res.json(treinadores);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async adicionarPokemon(req, res) {
        try {
            const treinador = await Treinador.findByPk(req.params.treinadorId);
            if (!treinador) {
                return res.status(404).json({ error: 'Não tem treinador no banco de dados' });
            }
            const pokemon = await Pokemon.create({ ...req.body, treinadorId: treinador.id });
            res.status(201).json(pokemon);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};

module.exports = TreinadorController;
