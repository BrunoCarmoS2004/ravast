const pokeomns = [
    {id: 1, nome: 'Pikasul', tipo: 'Molho', altura: 1.65, peso: 45, nivelPoder:1},
    {id: 2, nome: 'Balbasauor', tipo: 'Água gaseificada', altura: 1.65, peso: 45, nivelPoder:1},
    {id: 3, nome: 'Xarmano', tipo: 'Pelé', altura: 1.65, peso: 45, nivelPoder:1},
]

const getPokemons = () => pokeomns;
const getPokemonById = (id) => pokeomns.find(p => p.id === parseInt(id))
const createPokemon = (nome, tipo, altura, peso, nivelPoder)=> {
    pokeomns.push({
        id : pokeomns.length+1,
        nome :  nome, 
        tipo : tipo, 
        altura : parseFloat(altura), 
        peso :  parseFloat(peso), 
        nivelPoder : parseInt(nivelPoder)})
    console.log(pokeomns)
}

module.exports = {getPokemons, getPokemonById, createPokemon};