import React, { useState } from 'react';
import { pokemons as pokemonsData } from '../data/pokemons';

export const PokemonsContext = React.createContext({
  pokemons: [],
  handleTest: () => {},
});

const PokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState(pokemonsData);

  const handleTest = () => {
    console.log('Funkcja z providera');
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
