import React from 'react';
import { StyledGetPokemonWrapper } from './PokePedia.styles';
import RandomPokemon from '../RandomPokemon/RandomPokemon';
import PokedexNav from '../PokedexNav/PokedexNav';

const PokePedia = () => {
  return (
    <>
      <StyledGetPokemonWrapper>
        <PokedexNav />
        <RandomPokemon />
      </StyledGetPokemonWrapper>
    </>
  );
};

export default PokePedia;
