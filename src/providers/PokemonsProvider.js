import React, { useState, useEffect } from 'react';

export const PokemonsContext = React.createContext({
  handleTest: () => {},
  handleGetPokemonList: () => {},
  handleFindPokemon: () => {},
  handleGetRandomPokemon: () => {},
  capitalizeFirstLetter: () => {},
  handleSetImgLoaded: () => {},
  resetPokedexOptions: () => {},
  currentPokedexOption: '',
  pokemon: {},
  pokemonList: [],
  imgLoaded: false,
  loadingRequired: false,
  loading: true,
});

const PokemonsProvider = ({ children }) => {
  useEffect(() => {});

  const API = 'https://pokeapi.co/api/v2/pokemon';

  const [currentPokedexOption, setCurrentPokedexOption] = useState(null);
  const [pokemon, setPokemons] = useState(null);
  const [pokemonList, setPokemonList] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [loadingRequired, setLoadingRequired] = useState(false);

  const [loading, setLoading] = useState(true);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let fetchedPokemons = [];

  useEffect(() => {}, []);

  // handle responsible for PokemonList
  const handleGetPokemonList = () => {
    setCurrentPokedexOption('pokemonList');
    const fetchPokemons = async () => {
      let res = await fetch(`${API}?offset=0&limit=6/`);
      let response = await res.json();

      const resolvePokemons = await Promise.all(
        response.results.map(async (singlePokemon) => {
          const res = await fetch(singlePokemon.url);
          return res.json();
        })
      );
      setPokemonList(resolvePokemons);
    };
    fetchPokemons();
  };

  // handle responsible for getting  random pokemon in pokedex
  const handleGetRandomPokemon = () => {
    setCurrentPokedexOption('randomPokemon');

    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    let randomPokemon = getRandomArbitrary(1, 898);

    const fetchData = async () => {
      setLoadingRequired(true);
      setPokemons(null);
      setImgLoaded(false);
      let res = await fetch(`${API}/${randomPokemon}/`);
      let response = await res.json();

      let typesArray = [];

      response.types.forEach((item) => {
        typesArray.push(item.type.name);
      });

      console.log('pokemon object from api for random pokemon', response);
      let pokemon = {
        id: response.id,
        name: response.name,
        artwork: response.sprites.other['official-artwork'].front_default,
        stats: response.stats,
        types: typesArray,
      };
      setPokemons(pokemon);
    };
    fetchData();
  };

  const handleFindPokemon = () => {
    setCurrentPokedexOption('findPokemon');
    console.log('POKEMON FORM');
  };

  const handleSetImgLoaded = () => {
    setImgLoaded(true);
  };

  const resetPokedexOptions = () => {
    setCurrentPokedexOption(null);
  };

  const handleTest = () => {
    console.log('TEST');
  };

  return (
    <PokemonsContext.Provider
      value={{
        handleGetRandomPokemon,
        handleFindPokemon,
        handleGetPokemonList,
        capitalizeFirstLetter,
        handleSetImgLoaded,
        resetPokedexOptions,
        currentPokedexOption,
        pokemon,
        pokemonList,
        imgLoaded,
        loadingRequired,
        loading,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
