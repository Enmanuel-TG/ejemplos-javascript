async function fetchPokemonList() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const data = await response.json();

  return data;
}

async function fetchPokemon(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();

  return data;
}

(async function main() {
  const pokemonList = await fetchPokemonList();
  console.log(pokemonList);
})();
