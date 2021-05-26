import React, { useState } from 'react';

export const PokemonsContext = React.createContext({
  handleShowRandomPokemon: () => {},
  isRandomPokemon: false,
  isTestComponent: '',
});

const PokemonsProvider = ({ children }) => {
  const [isRandomPokemon, setRandomPokemon] = useState(false);
  const [isTestComponent, setTestComponent] = useState(false);

  const handleShowRandomPokemon = () => {
    console.log('function fired from provider TRUE');
    setRandomPokemon(true);
  };

  return (
    <PokemonsContext.Provider
      value={{
        handleShowRandomPokemon,
        isRandomPokemon,
        isTestComponent,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
