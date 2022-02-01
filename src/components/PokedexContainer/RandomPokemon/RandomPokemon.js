import React, { useContext } from 'react';
import { StyledPokemonContainer } from './RandomPokemon.styles';
import { PokemonsContext } from '../../../providers/PokemonsProvider';

const RandomPokemon = () => {
  const ctx = useContext(PokemonsContext);

  const { capitalizeFirstLetter } = useContext(PokemonsContext);
  const { handleImageLoaded } = useContext(PokemonsContext);

  return (
    <>
      {ctx.currentPokedexOption === 'randomPokemon' ? (
        <>
          <StyledPokemonContainer style={ctx.imageLoaded ? {} : { display: 'none' }}>
            {ctx.pokemon ? (
              <>
                <div className="poke-id"> {'#' + ctx.pokemon.id + ' '}</div>
                <div className="poke-name">{capitalizeFirstLetter(ctx.pokemon.name)}</div>
                <img className={`poke-photo`} onLoad={() => handleImageLoaded()} src={ctx.pokemon ? ctx.pokemon.artwork : ''} alt="" />
              </>
            ) : null}
          </StyledPokemonContainer>
          <div style={ctx.imageLoaded ? { display: 'none' } : {}}>loading...</div>
        </>
      ) : null}
    </>
  );
};

export default RandomPokemon;
