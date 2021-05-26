import React, { useContext } from 'react';
import { StyledGetPokemonWrapper } from './PokePedia.styles';
import { PokemonsContext } from '../../providers/PokemonsProvider';
import RandomPokemon from '../RandomPokemon/RandomPokemon';

const PokePedia = () => {
  const { handleShowRandomPokemon } = useContext(PokemonsContext);

  const ctx = useContext(PokemonsContext);

  return (
    <>
      <StyledGetPokemonWrapper>
        <button onClick={() => handleShowRandomPokemon()}>Fire provider handle</button>
        <button onClick={() => console.log('isRandomPokemon state: ', ctx.isRandomPokemon)}>Show randomPokemon State</button>
        {ctx.isRandomPokemon ? <RandomPokemon /> : 'isRandomPokemon = False'}
        <div>OTO DANE Z PROVIDERA</div>
      </StyledGetPokemonWrapper>
    </>
  );
};

export default PokePedia;
