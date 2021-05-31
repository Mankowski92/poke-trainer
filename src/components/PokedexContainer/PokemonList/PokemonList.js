import React, { useContext, useEffect, useState } from 'react';
import { StyledPokemonListContainer } from './PokemonList.styles';
import { PokemonsContext } from '../../../providers/PokemonsProvider';

const PokemonList = () => {
  const ctx = useContext(PokemonsContext);

  useEffect(() => {
    console.log('USE EFFECT CHANGE');
  }, [ctx.PokemonList]);

  return (
    <>
      {ctx.currentPokedexOption === 'pokemonList' ? (
        <StyledPokemonListContainer>
          {/* {ctx.pokemonList ? ctx.pokemonList.map((item, i) => <div key={i}>{item}</div>) : <div>ERROR</div>} */}
          <div>TEST DIV</div>
          {ctx.pokemonList ? console.log('Pokemon List', ctx.pokemonList) : <div>No Pokemon List</div>}
        </StyledPokemonListContainer>
      ) : null}
    </>
  );
};

export default PokemonList;
