document.getElementById("random")
.addEventListener('click', getRandomPokemon);

function getRandomPokemon() {
    var rand = Math.floor(Math.random() * 151) + 1;
    getPokemon(rand);
}

function getPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(function (response) { return response.json(); })
    .then(function (json) {
        var pokemon = json;
        renderPokemon(pokemon);
    });
}

function renderPokemon(pokemon) {
    console.log(pokemon)
    var pkHeader = document.getElementById("pk-header");
    var pkName = document.getElementById("pk-name");
    var pkAbilities = document.getElementById("pk-abilities");
    var pkMoves = document.getElementById("pk-moves");
    
    pkHeader.innerHTML = '';
    pkAbilities.innerHTML = '';
    pkMoves.innerHTML = '';

    // render pokemon name
    var name = document.createElement('h1');
    name.innerHTML = pokemon.name;
    pkHeader.appendChild(name);

    // render pokemon image
    var image = document.createElement('img');
    image.src = pokemon.sprites.front_default;
    pkHeader.appendChild(image);
    
    // render pokemon abilities
    for (var i = 0; i < pokemon.abilities.length; i++) {
        var ability = document.createElement("li")
        ability.innerHTML = pokemon.abilities[i].ability.name;
        pkAbilities.appendChild(ability);
    }

    // render pokemon moves
    for (var i = 0; i < pokemon.moves.length; i++) {
        var move = document.createElement("li")
        move.innerHTML = pokemon.moves[i].move.name;
        pkMoves.appendChild(move);
    }
}