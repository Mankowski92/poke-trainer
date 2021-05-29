import React from 'react';
import { StyledGetPokemonWrapper } from './PokedexContainer.styles';
import RandomPokemon from './RandomPokemon/RandomPokemon';
import PokedexNav from './PokedexNav/PokedexNav';
import PokemonList from './PokemonList/PokemonList';

const PokedexContainer = () => {
  return (
    <>
      <StyledGetPokemonWrapper>
        <PokedexNav />
        <PokemonList />
        <RandomPokemon />
      </StyledGetPokemonWrapper>
    </>
  );
};

export default PokedexContainer;
