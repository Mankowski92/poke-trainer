import React from 'react';
import { StyledGetPokemonWrapper } from './PokedexContainer.styles';
import RandomPokemon from './RandomPokemon/RandomPokemon';
import PokedexNav from './PokedexNav/PokedexNav';

const PokedexContainer = () => {
  return (
    <>
      <StyledGetPokemonWrapper>
        <PokedexNav />
        <RandomPokemon />
      </StyledGetPokemonWrapper>
    </>
  );
};

export default PokedexContainer;
