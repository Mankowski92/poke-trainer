import React, { useContext } from 'react';
import { StyledDiv } from './PokePedia.styles';
import { PokemonsContext } from '../../providers/PokemonsProvider';

const PokePedia = () => {
  const { pokemons } = useContext(PokemonsContext);
  const { handleTest } = useContext(PokemonsContext);

  console.log('PokePedia Pokemons passed from provider: ', pokemons);

  return (
    <>
      <StyledDiv>{<p>Pokedex content</p>}</StyledDiv>
      <button onClick={() => handleTest()}>Test provider func</button>
    </>
  );
};

export default PokePedia;
