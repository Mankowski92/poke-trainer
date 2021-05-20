import React, { useState } from 'react';

export const PokemonsContext = React.createContext({
  pokemons: [],
  handleGetRandomPokemon: () => {},
});

const PokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState();

  const handleGetRandomPokemon = () => {
    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    let randomPokemon = getRandomArbitrary(1, 898);

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`)
      .then((response) => response.json())
      .then((data) =>
        setPokemons(() => {
          let pokemon = {
            name: data.name,
            artwork: data.sprites.other['official-artwork'].front_default,
            stats: data.stats,
          };
          return {
            pokemon,
          };
        })
      );
  };

  return (
    <PokemonsContext.Provider
      value={{
        pokemons,
        handleGetRandomPokemon,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
