import React from 'react';

export const PokemonsContext = React.createContext({
  handleTest: () => {},
});

const PokemonsProvider = ({ children }) => {
  const handleTest = () => {
    console.log('function fired from provider');
  };

  return (
    <PokemonsContext.Provider
      value={{
        handleTest,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsProvider;
