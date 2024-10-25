const pokemon = require('../model/Pokemon')
const getAllPokemons = (req, res) => {
    const pokemons = pokemon.getPokemons();
    res.render('index',{pokemons})
}

const getPokemon = (req,res)=>{
    const pokemonGet = pokemon.getPokemonById(req.params.id)
    if(pokemonGet){
        res.render('pokemon',{pokemonGet})
    }else{
        res.status(404).send("Pokemon não encontrado")
    }
}

const createPokemon = (req, res)=>{
    const {nome, tipo, altura, peso, nivelPoder} = req.body;
        pokemon.createPokemon(nome, tipo, altura, peso, nivelPoder);
        res.status(201).json();
}

module.exports={getAllPokemons, getPokemon, createPokemon}