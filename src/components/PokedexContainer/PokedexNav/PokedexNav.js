import React, { useContext } from 'react';
import { StyledButton, StyledPokedexButtonsContainer } from './PokedexNav.styles';
import { MainPokeAppContext } from '../../../providers/MainPokeAppContext';

const PokedexNav = () => {
  const { handleGetRandomPokemon, handleGetPokemonList, handleFindPokemon } = useContext(MainPokeAppContext);

  return (
    <>
      <StyledPokedexButtonsContainer>
        <StyledButton onClick={() => handleGetPokemonList()}>Pokemons List</StyledButton>
        <StyledButton onClick={() => handleGetRandomPokemon()}>Get Random Pokemon</StyledButton>
        <StyledButton onClick={() => handleFindPokemon()}>Find Pokemon</StyledButton>
      </StyledPokedexButtonsContainer>
    </>
  );
};

export default PokedexNav;
