import React, { useState, useEffect } from 'react';

export const PokemonsContext = React.createContext({
  handleShowRandomPokemon: () => {},
  handleSetFalseRandomPokemon: () => {},
  isRandomPokemon: false,
  isTestComponent: '',
});

const PokemonsProvider = ({ children }) => {
  useEffect(() => {
    // Update the document title using the browser API
  });

  const [isRandomPokemon, setRandomPokemon] = useState(false);
  const [isTestComponent, setTestComponent] = useState(false);

  const handleShowRandomPokemon = () => {
    console.log('setRandomPokemon === TRUE');
    setRandomPokemon(true);
  };

  const handleSetFalseRandomPokemon = () => {
    console.log('setRandomPokemon === FALSE');
    setRandomPokemon(false);
  };

  return (
    <PokemonsContext.Provider
      value={{
        handleShowRandomPokemon,
        isRandomPokemon,
        isTestComponent,
        handleSetFalseRandomPokemon,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
