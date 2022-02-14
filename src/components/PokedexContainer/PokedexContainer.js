import React from 'react';
import DefaultContainer from '../Containers/DefaultContainer/DefaultContainer';
import PokedexNav from './PokedexNav/PokedexNav';
import PokemonList from './PokemonList/PokemonList';
import RandomPokemon from './RandomPokemon/RandomPokemon';
import FindPokemon from './FindPokemon/FindPokemon';

const PokedexContainer = () => {
  return (
    <>
      <DefaultContainer>
        <PokedexNav />
        <PokemonList />
        <RandomPokemon />
        <FindPokemon />
      </DefaultContainer>
    </>
  );
};

export default PokedexContainer;
