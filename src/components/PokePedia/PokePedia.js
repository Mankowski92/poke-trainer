import React, { useContext, useState } from 'react';
import { StyledGetPokemonButton, StyledPokemonContainer, StyledGetPokemonWrapper } from './PokePedia.styles';
// import { PokemonsContext } from '../../providers/PokemonsProvider';

const PokePedia = () => {
  // const { handleTest } = useContext(PokemonsContext);

  const [pokemon, setPokemons] = useState(null);
  const [loading, setLoaded] = useState(false);
  const [loadingRequired, setLoadingRequired] = useState(false);

  const handleGetRandomPokemon = () => {
    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    let randomPokemon = getRandomArbitrary(1, 898);

    const fetchData = async () => {
      setLoadingRequired(true);
      setPokemons(null);
      setLoaded(false);
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`);
      let response = await res.json();

      let typesArray = [];

      response.types.forEach((item) => {
        typesArray.push(item.type.name);
      });

      console.log(response);
      let pokemon = {
        id: response.id,
        name: response.name,
        artwork: response.sprites.other['official-artwork'].front_default,
        stats: response.stats,
        types: typesArray,
      };
      setPokemons(pokemon);
    };
    fetchData();
  };

  return (
    <>
      <StyledGetPokemonWrapper>
        <StyledGetPokemonButton onClick={() => handleGetRandomPokemon()}>Get random pokemon</StyledGetPokemonButton>
        <StyledPokemonContainer>
          {console.log(pokemon)}
          <div className="poke-id"> {pokemon && loading ? '#' + pokemon.id + ' ' : ''}</div>
          <div className="poke-name">{pokemon && loading ? pokemon.name : loadingRequired ? <div className="loading">loading...</div> : null}</div>
          <img className="poke-photo" onLoad={() => setLoaded(true)} src={pokemon ? pokemon.artwork : ''} alt="" />
          <div>
            {pokemon && loading
              ? pokemon.types.map((element, index) => {
                  return <div key={index}>{element}</div>;
                })
              : ''}
          </div>
          {/* <button onClick={() => handleTest()}>Fire provider handle</button> */}
        </StyledPokemonContainer>
      </StyledGetPokemonWrapper>
    </>
  );
};

export default PokePedia;
