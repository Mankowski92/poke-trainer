import React, { useContext } from 'react';
import { StyledDiv } from './PokePedia.styles';
import { PokemonsContext } from '../../providers/PokemonsProvider';

const PokePedia = () => {
  const { handleGetRandomPokemon } = useContext(PokemonsContext);

  return (
    <>
      <StyledDiv>{<p>Pokedex content</p>}</StyledDiv>
      <button onClick={() => handleGetRandomPokemon()}>Get random pokemon to console</button>
    </>
  );
};

export default PokePedia;
