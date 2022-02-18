import React, { useContext } from 'react';
import { StyledPokemonContainer } from './RandomPokemon.styles';
import { MainPokeAppContext } from '../../../providers/MainPokeAppContext';

const RandomPokemon = () => {
  const ctx = useContext(MainPokeAppContext);

  const { capitalizeFirstLetter } = useContext(MainPokeAppContext);
  const { handleImageLoaded } = useContext(MainPokeAppContext);

  return (
    <>
      {ctx.currentPokedexOption === 'randomPokemon' ? (
        <StyledPokemonContainer>
          {ctx.pokemon ? (
            <div className="pokemon-container-wrapper">
              <div className="poke-id"> {'#' + ctx.pokemon.id + ' '}</div>
              <div className="poke-name">{capitalizeFirstLetter(ctx.pokemon.name)}</div>
              <img className="poke-photo" onLoad={() => handleImageLoaded()} src={ctx.pokemon ? ctx.pokemon.artwork : ''} alt="" />
              <div className="poke-types">
                {ctx.pokemon.types.map((element, index) => {
                  return (
                    <div className={`poke-types__each-type ${element}`} key={index}>
                      {element}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="loading">
              <span>loading...</span>
            </div>
          )}
        </StyledPokemonContainer>
      ) : null}
    </>
  );
};

export default RandomPokemon;
