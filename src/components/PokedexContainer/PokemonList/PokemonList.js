import React, { useContext } from 'react';
import { StyledPokemonListContainer } from './PokemonList.styles';
import { PokemonsContext } from '../../../providers/PokemonsProvider';

const PokemonList = () => {
  const { capitalizeFirstLetter } = useContext(PokemonsContext);

  const ctx = useContext(PokemonsContext);

  return (
    <>
      {ctx.currentPokedexOption === 'pokemonList' ? (
        <StyledPokemonListContainer>
          {ctx.pokemonList.map((item, i) => {
            return (
              <div key={i} className="each-pokemon-container">
                {capitalizeFirstLetter(item)}
              </div>
            );
          })}
        </StyledPokemonListContainer>
      ) : null}
    </>
  );
};

export default PokemonList;
