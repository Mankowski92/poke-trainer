import React, { useContext } from 'react';
import { StyledPokedexButtonsContainer, StyledButton } from './PokedexNav.styles';
import { PokemonsContext } from '../../providers/PokemonsProvider';

const PokedexNav = () => {
  const { handleGetRandomPokemon, handleGetPokemonList, handleGetPokemon } = useContext(PokemonsContext);

  return (
    <>
      <StyledPokedexButtonsContainer>
        <StyledButton onClick={() => handleGetPokemonList()}>Pokemons List</StyledButton>
        <StyledButton onClick={() => handleGetRandomPokemon()}>Get Random Pokemon</StyledButton>
        <StyledButton onClick={() => handleGetPokemon()}>Find Pokemon</StyledButton>
      </StyledPokedexButtonsContainer>
    </>
  );
};

export default PokedexNav;
