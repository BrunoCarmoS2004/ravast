document.addEventListener("DOMContentLoaded", () => {
    carregarTreinadores();

    document.getElementById("addTrainerForm").addEventListener("submit", async (event) => {
        event.preventDefault();

        const trainer = {
            nome: document.getElementById("trainerName").value,
            genero: document.getElementById("trainerGender").value,
            altura: parseFloat(document.getElementById("trainerHeight").value),
            peso: parseFloat(document.getElementById("trainerWeight").value)
        };

        const response = await fetch("http://localhost:3000/treinadores", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(trainer)
        });

        if (response.ok) {
            carregarTreinadores();
        }
    });

    document.getElementById("addPokemonForm").addEventListener("submit", async (event) => {
        event.preventDefault();
        const pokemon = {
            nome: document.getElementById("pokemonName").value,
            tipo: document.getElementById("pokemonType").value,
            altura: parseFloat(document.getElementById("pokemonHeight").value),
            peso: parseFloat(document.getElementById("pokemonWeight").value),
            nivelPoder: parseInt(document.getElementById("pokemonPowerLevel").value),
            treinadorId: parseInt(document.getElementById("trainerSelect").value)
        };
        const response = await fetch(`http://localhost:3000/treinadores/${pokemon.treinadorId}/pokemons`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(pokemon)
        });

        if (response.ok) {
            carregarTreinadores();
        }
    });
});

async function carregarTreinadores() {
    const response = await fetch("http://localhost:3000/treinadores");
    const trainers = await response.json();

    const trainerSelect = document.getElementById("trainerSelect");
    trainerSelect.innerHTML = "";
    const trainersList = document.getElementById("trainersList");
    trainersList.innerHTML = "";

    trainers.forEach(trainer => {
        const option = document.createElement("option");
        option.value = trainer.id;
        option.textContent = trainer.nome;
        trainerSelect.appendChild(option);

        const trainerDiv = document.createElement("div");
        trainerDiv.className = "trainer";
        trainerDiv.innerHTML = `<strong>${trainer.nome}</strong> (${trainer.genero}) - Altura: ${trainer.altura} m, Peso: ${trainer.peso} kg`;

        const pokemonList = document.createElement("div");
        trainer.pokemons.forEach(pokemon => {
            const pokemonDiv = document.createElement("div");
            pokemonDiv.className = "pokemon";
            pokemonDiv.textContent = `${pokemon.nome} (Tipo: ${pokemon.tipo}) - Poder: ${pokemon.nivelPoder}`;
            pokemonList.appendChild(pokemonDiv);
        });

        trainerDiv.appendChild(pokemonList);
        trainersList.appendChild(trainerDiv);
    });
}
