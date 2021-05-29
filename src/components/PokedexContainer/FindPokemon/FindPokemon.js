import React, { useContext } from 'react';
import { StyledFindPokemonContainer } from './FindPokemon.styles';
import { PokemonsContext } from '../../../providers/PokemonsProvider';

const FindPokemon = () => {
  const { capitalizeFirstLetter } = useContext(PokemonsContext);

  const ctx = useContext(PokemonsContext);

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
