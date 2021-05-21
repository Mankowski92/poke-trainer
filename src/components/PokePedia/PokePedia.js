import React, { useContext } from 'react';
import { StyledGetPokemonButton, StyledPokemonContainer, StyledGetPokemonWrapper } from './PokePedia.styles';
import { PokemonsContext } from '../../providers/PokemonsProvider';

const PokePedia = () => {
  const { handleGetRandomPokemon } = useContext(PokemonsContext);

  return (
    <>
      <StyledGetPokemonWrapper>
        <StyledGetPokemonButton onClick={() => handleGetRandomPokemon()}>Get random pokemon</StyledGetPokemonButton>
        <StyledPokemonContainer>{<p>Pokedex content</p>}</StyledPokemonContainer>
      </StyledGetPokemonWrapper>
    </>
  );
};

export default PokePedia;
