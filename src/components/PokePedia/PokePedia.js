import React from 'react';
import { StyledGetPokemonWrapper } from './PokePedia.styles';
// import { PokemonsContext } from '../../providers/PokemonsProvider';
import RandomPokemon from '../RandomPokemon/RandomPokemon';

const PokePedia = () => {
  return (
    <>
      <StyledGetPokemonWrapper>
        <RandomPokemon />
      </StyledGetPokemonWrapper>
    </>
  );
};

export default PokePedia;
