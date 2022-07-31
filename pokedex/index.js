var currPokeId = 1;

var ajax = new XMLHttpRequest();

ajax.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + currPokeId, true);
ajax.setRequestHeader('Content-type', 'application/json');
ajax.send();

ajax.onreadystatechange = function() {
  if (ajax.readyState === 4 && ajax.status === 200) {
    showPokemon(JSON.parse(ajax.responseText));
  }
};

function showPokemon(pokemon) {
    var pokeName = document.getElementById("currPokeName");
    var pokeImg = document.getElementById("currPokeImg");
    currPokeId = pokemon.id;
    pokeName.innerText = pokemon.name;
    pokeImg.src = pokemon.sprites.front_default;
}

function nextPokemon() {
    nextId();
    ajax.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + currPokeId, true);
    ajax.setRequestHeader('Content-type', 'application/json');
    ajax.send();
}

function prevPokemon() {
    prevId();
    ajax.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + currPokeId, true);
    ajax.setRequestHeader('Content-type', 'application/json');
    ajax.send();
}

function nextId() {
    return currPokeId ++;
}

function prevId() {
    if (currPokeId > 1) {
        return currPokeId --;
    }
}