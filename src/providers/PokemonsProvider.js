import React, { useState } from 'react';
import { pokemons as pokemonsData } from '../data/pokemons';

export const PokemonsContext = React.createContext({
  pokemons: [],
  handleTest: () => {},
});

const PokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState();

  const handleTest = () => {
    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    let randomPokemon = getRandomArbitrary(1, 898);

    console.log('random', randomPokemon);

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
        handleTest,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
