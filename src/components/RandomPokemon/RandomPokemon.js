import React, { useState } from 'react';
import { StyledGetPokemonButton, StyledPokemonContainer } from './RandomPokemon.styles';

const RandomPokemon = () => {
  // const { handleTest } = useContext(PokemonsContext);

  const [pokemon, setPokemons] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [loadingRequired, setLoadingRequired] = useState(false);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleGetRandomPokemon = () => {
    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    let randomPokemon = getRandomArbitrary(1, 898);

    const fetchData = async () => {
      setLoadingRequired(true);
      setPokemons(null);
      setImgLoaded(false);
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
      <StyledGetPokemonButton onClick={() => handleGetRandomPokemon()}>Get random pokemon</StyledGetPokemonButton>
      <StyledPokemonContainer>
        {console.log(pokemon)}
        <div className="poke-id"> {pokemon && imgLoaded ? '#' + pokemon.id + ' ' : ''}</div>
        <div className="poke-name">
          {pokemon && imgLoaded ? capitalizeFirstLetter(pokemon.name) : loadingRequired ? <div className="loading">loading...</div> : null}
        </div>
        <img className="poke-photo" onLoad={() => setImgLoaded(true)} src={pokemon ? pokemon.artwork : ''} alt="" />
        <div className={imgLoaded ? 'poke-types' : ''}>
          {pokemon && imgLoaded
            ? pokemon.types.map((element, index) => {
                return (
                  <div className={`poke-types__each-type ${element}`} key={index}>
                    {element}
                  </div>
                );
              })
            : null}
        </div>
        {/* <button onClick={() => handleTest()}>Fire provider handle</button> */}
      </StyledPokemonContainer>
    </>
  );
};

export default RandomPokemon;
