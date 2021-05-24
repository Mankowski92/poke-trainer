import React, { useContext, useState } from 'react';
import { StyledGetPokemonButton, StyledPokemonContainer, StyledGetPokemonWrapper } from './PokePedia.styles';
// import { PokemonsContext } from '../../providers/PokemonsProvider';

const PokePedia = () => {
  // const { handleTest } = useContext(PokemonsContext);

  const [pokemon, setPokemons] = useState(null);
  const [loading, setLoaded] = useState(false);

  const handleGetRandomPokemon = () => {
    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    let randomPokemon = getRandomArbitrary(1, 898);

    const fetchData = async () => {
      setPokemons(null);
      setLoaded(false);
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`);
      let response = await res.json();
      setPokemons(response);
    };
    fetchData();
  };

  // const handleShowState = () => {
  //   console.log(pokemon);
  // };

  return (
    <>
      <StyledGetPokemonWrapper>
        <StyledGetPokemonButton onClick={() => handleGetRandomPokemon()}>Get random pokemon</StyledGetPokemonButton>
        <StyledPokemonContainer>
          <div className="poke-id"> {pokemon && loading ? '#' + pokemon.id + ' ' : ''}</div>
          <div className="poke-name">{pokemon && loading ? pokemon.name : 'Loading...'}</div>
          <img
            className="poke-photo"
            onLoad={() => setLoaded(true)}
            src={pokemon ? pokemon.sprites.other['official-artwork'].front_default : ''}
            alt=""
          />
          {/* <button onClick={() => handleShowState()}>Show pokemon in console</button>
          <button onClick={() => handleTest()}>Fire provider handle</button> */}
        </StyledPokemonContainer>
      </StyledGetPokemonWrapper>
    </>
  );
};

export default PokePedia;
