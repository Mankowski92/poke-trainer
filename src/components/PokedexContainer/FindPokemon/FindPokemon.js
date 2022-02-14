import React, { useContext } from 'react';
import { StyledFindPokemonContainer } from './FindPokemon.styles';
import { MainPokeAppContext } from '../../../providers/MainPokeAppContext';

const FindPokemon = () => {
  const ctx = useContext(MainPokeAppContext);

  return (
    <>
      {ctx.currentPokedexOption === 'findPokemon' ? (
        <StyledFindPokemonContainer>
          <span>FILTERING NEED TO BE APPLIED HERE</span>
        </StyledFindPokemonContainer>
      ) : null}
    </>
  );
};

export default FindPokemon;
