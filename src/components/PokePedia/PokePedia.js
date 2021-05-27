import React, { useContext } from 'react';
import { StyledGetPokemonWrapper } from './PokePedia.styles';
import { PokemonsContext } from '../../providers/PokemonsProvider';
import RandomPokemon from '../RandomPokemon/RandomPokemon';

const PokePedia = () => {
  const { handleShowRandomPokemon } = useContext(PokemonsContext);
  const { handleSetFalseRandomPokemon } = useContext(PokemonsContext);

  const ctx = useContext(PokemonsContext);

  return (
    <>
      <StyledGetPokemonWrapper>
        <button onClick={() => handleShowRandomPokemon()}>setRandomPokemon === TRUE</button>
        <button onClick={() => console.log('isRandomPokemon state: ', ctx.isRandomPokemon)}>Show randomPokemon State</button>
        <button onClick={() => handleSetFalseRandomPokemon()}>setRandomPokemon === FALSE</button>
        {ctx.isRandomPokemon ? <RandomPokemon /> : 'isRandomPokemon = False'}
      </StyledGetPokemonWrapper>
    </>
  );
};

export default PokePedia;
