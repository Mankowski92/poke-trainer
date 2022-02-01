import React, { useContext } from 'react';
import { StyledPokemonContainer } from './RandomPokemon.styles';
import { PokemonsContext } from '../../../providers/PokemonsProvider';

const RandomPokemon = () => {
  const ctx = useContext(PokemonsContext);

  const { capitalizeFirstLetter } = useContext(PokemonsContext);

  return (
    <>
      {ctx.currentPokedexOption === 'randomPokemon' ? (
        <StyledPokemonContainer>
          {ctx.pokemon ? (
            <>
              <div className="poke-id"> {'#' + ctx.pokemon.id + ' '}</div>
              <div className="poke-name">{capitalizeFirstLetter(ctx.pokemon.name)}</div>
              <img className={`poke-photo`} src={ctx.pokemon ? ctx.pokemon.artwork : ''} alt="" />
              <div className="poke-types">
                {ctx.pokemon.types.map((element, index) => {
                  return (
                    <div className={`poke-types__each-type ${element}`} key={index}>
                      {element}
                    </div>
                  );
                })}
              </div>
            </>
          ) : ctx.loadingRequired ? (
            <div className="loading">loading...</div>
          ) : null}
        </StyledPokemonContainer>
      ) : null}
    </>
  );
};

export default RandomPokemon;
