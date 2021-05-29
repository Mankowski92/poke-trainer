import React from 'react';
import { StyledGetPokemonWrapper } from './PokedexContainer.styles';
import PokedexNav from './PokedexNav/PokedexNav';
import PokemonList from './PokemonList/PokemonList';
import RandomPokemon from './RandomPokemon/RandomPokemon';
import FindPokemon from './FindPokemon/FindPokemon';

const PokedexContainer = () => {
  return (
    <>
      <StyledGetPokemonWrapper>
        <PokedexNav />
        <PokemonList />
        <RandomPokemon />
        <FindPokemon />
      </StyledGetPokemonWrapper>
    </>
  );
};

export default PokedexContainer;
