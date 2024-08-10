const pokemonName = document.querySelector('.pokemonname');
const pokemonNumber = document.querySelector('.pokemonnumber');
const pokemonImage = document.querySelector('pokemonimagem');
const form = document.querySelector('.form');
const input = document.querySelector('.inputsearch');
const btnanterior = document.querySelector('.btn-Anterior');
const btnproximo = document.querySelector('.btn-Proximo');

let searchPokemon = 1;


const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemon}');
    if (APIResponse.status == 200 ) {
    const data = await APIresponde.json();
    return data;
    }
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'cbas procurando...';
    pokemonNumber.innerHTML = 'cbas procurando...';

    const data = await fetchPokemon(pokemon);
    if (data) {
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id
    pokemonImage.src = data['sprites']['version']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
    searchPokemon = data.id;
    } else {
        pokemonName.innerHTML = 'Sebas não achou ele'
        pokemonNumber.innerHTML = 'Cbas não achou ele' 
    }
}

form.addEventListener('submit', (event) =>  {
    event.preventDefault();
   renderPokemon(input.value.toLowerCase());
});

btnanterior.addEventListener('click', () =>  {
  if (searchPokemon > 1) {
  searchPokemon -=1;
  renderPokemon(searchPokemon);
  }
});

btnproximo.addEventListener('click', ()  =>  {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});


renderPokemon(searchPokemon);