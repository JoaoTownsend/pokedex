var currPokeId = 1;

$(document).ready(function() {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/' + currPokeId,
        async: true,
        success: showPokemon,
        error: errorCallback
    });

    $('#next').click(function(event){
        console.log("Next");
        nextPokemon();
    });

    $('#prev').click(function(event){
        console.log("Prev");
        prevPokemon();
    });

    searchPokemon();
    
});


function showPokemon(response) {
    console.log(response);
    currPokeId = response.id;
    $('#currPokeName').text(response.name);
    $('#currPokeImg').attr('src',response.sprites.front_default);
    showTypes(response);
}

function nextPokemon() {
    nextId();
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/' + currPokeId,
        async: true,
        success: showPokemon,
        error: errorCallback
    });
}

function prevPokemon() {
    prevId();
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/' + currPokeId,
        async: true,
        success: showPokemon,
        error: errorCallback
    });
}

function nextId() {
    return currPokeId ++;
}

function prevId() {
    if (currPokeId > 1) {
        return currPokeId --;
    }
}

function errorCallback(request, status, error) {
    alert(error);
}

function searchPokemon() {
    $('#pokeFinderBtn').click(function(event) {
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/' + $('#pokeFinder').val(),
            async: true,
            success: showPokemon,
            error: errorCallback
        });
    })
}

function showTypes(pokemon) {
    console.log(pokemon.types);
    $('.typesText').remove();
    Object.values(pokemon.types).forEach(n => addHtmlParagraph(n.type.name));
}

function addHtmlParagraph(data) {
    var htmlText = '<p class="typesText">' + data + '</p>';
    $(htmlText).appendTo('#types');
}