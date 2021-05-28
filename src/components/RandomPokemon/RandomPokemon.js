import React, { useContext } from 'react';
import { StyledPokemonContainer } from './RandomPokemon.styles';
import { PokemonsContext } from '../../providers/PokemonsProvider';

const RandomPokemon = () => {
  const { capitalizeFirstLetter } = useContext(PokemonsContext);
  const { handleSetImgLoaded } = useContext(PokemonsContext);

  const ctx = useContext(PokemonsContext);

  return (
    <>
      <StyledPokemonContainer>
        <div className="poke-id"> {ctx.pokemon && ctx.imgLoaded ? '#' + ctx.pokemon.id + ' ' : ''}</div>
        <div className="poke-name">
          {ctx.pokemon && ctx.imgLoaded ? (
            capitalizeFirstLetter(ctx.pokemon.name)
          ) : ctx.loadingRequired ? (
            <div className="loading">loading...</div>
          ) : null}
        </div>
        <img className="poke-photo" onLoad={() => handleSetImgLoaded()} src={ctx.pokemon ? ctx.pokemon.artwork : ''} alt="" />
        <div className={ctx.imgLoaded ? 'poke-types' : ''}>
          {ctx.pokemon && ctx.imgLoaded
            ? ctx.pokemon.types.map((element, index) => {
                return (
                  <div className={`poke-types__each-type ${element}`} key={index}>
                    {element}
                  </div>
                );
              })
            : null}
        </div>
      </StyledPokemonContainer>
    </>
  );
};

export default RandomPokemon;
