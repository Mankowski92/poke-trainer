import React, { useEffect, useState } from 'react';

export const PokemonsContext = React.createContext({
  handleGetPokemonList: () => {},
  handleFindPokemon: () => {},
  handleGetRandomPokemon: () => {},
  capitalizeFirstLetter: () => {},
  handleSetImgLoaded: () => {},
  resetPokedexOptions: () => {},
  handleIncrementOffset: () => {},
  handleDecrementOffset: () => {},

  currentPokedexOption: '',
  pokemon: {},
  pokemonList: [],
  imgLoaded: false,
  loadingRequired: false,
  loading: true,
  offset: 0,
});

const PokemonsProvider = ({ children }) => {
  useEffect(() => {});

  const API = 'https://pokeapi.co/api/v2/pokemon';

  const [currentPokedexOption, setCurrentPokedexOption] = useState(null);
  const [pokemon, setPokemons] = useState(null);
  const [pokemonList, setPokemonList] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [loadingRequired, setLoadingRequired] = useState(false);
  const [offset, setOffset] = useState(0);

  const [loading, setLoading] = useState(true);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {}, []);

  const handleIncrementOffset = () => {
    console.log('NEXT FROM POKE PROVIDER');
    setOffset(offset + 6);
    handleGetPokemonList();
  };

  const handleDecrementOffset = () => {
    console.log('PREVOIUS FROM POKE PROVIDER');
    setOffset(offset - 6);
    handleGetPokemonList();
  };

  // handle responsible for PokemonList
  const handleGetPokemonList = () => {
    setCurrentPokedexOption('pokemonList');
    const fetchPokemons = async () => {
      let res = await fetch(`${API}?offset=${offset}&limit=6/`);
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

  return (
    <PokemonsContext.Provider
      value={{
        handleGetRandomPokemon,
        handleFindPokemon,
        handleGetPokemonList,
        capitalizeFirstLetter,
        handleSetImgLoaded,
        resetPokedexOptions,
        handleIncrementOffset,
        handleDecrementOffset,
        currentPokedexOption,
        pokemon,
        pokemonList,
        imgLoaded,
        loadingRequired,
        loading,
        offset,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
