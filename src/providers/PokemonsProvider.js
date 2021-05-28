import React, { useState, useEffect } from 'react';

export const PokemonsContext = React.createContext({
  handleGetPokemonList: () => {},
  handleGetPokemon: () => {},
  handleGetRandomPokemon: () => {},
  capitalizeFirstLetter: () => {},
  pokemon: {},
  imgLoaded: false,
  loadingRequired: false,
});

const PokemonsProvider = ({ children }) => {
  useEffect(() => {});

  const [pokemon, setPokemons] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [loadingRequired, setLoadingRequired] = useState(false);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // handle responsible for getting  random pokemon in pokedex
  const handleGetRandomPokemon = () => {
    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    let randomPokemon = getRandomArbitrary(1, 898);

    const fetchData = async () => {
      setLoadingRequired(true);
      setPokemons(null);
      setImgLoaded(false);
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`);
      let response = await res.json();

      let typesArray = [];

      response.types.forEach((item) => {
        typesArray.push(item.type.name);
      });

      console.log(response);
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

  const handleGetPokemonList = () => {
    console.log('POKEMON LIST');
  };

  const handleGetPokemon = () => {
    console.log('POKEMON FORM');
  };

  const handleSetImgLoaded = () => {
    console.log('setImgLoaded === TRUE');
    setImgLoaded(true);
  };

  return (
    <PokemonsContext.Provider
      value={{
        handleGetRandomPokemon,
        handleGetPokemonList,
        handleGetPokemon,
        capitalizeFirstLetter,
        handleSetImgLoaded,
        pokemon,
        imgLoaded,
        loadingRequired,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
