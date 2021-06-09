import React, { useContext, useState, useCallback } from 'react';
import { StyledPokemonListContainer } from './PokemonList.styles';
import { PokemonsContext } from '../../../providers/PokemonsProvider';

const PokemonList = () => {
  const ctx = useContext(PokemonsContext);

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const { handleSetImgLoaded } = useContext(PokemonsContext);

  return (
    <>
      {ctx.currentPokedexOption === 'pokemonList' ? (
        <StyledPokemonListContainer>
          {ctx.pokemonList && ctx.pokemonList.length ? (
            ctx.pokemonList.map((item, i) => (
              <div className="each-pokemon-container" key={i}>
                <div className="poke-id">{item.id}</div>
                <div className="poke-name">{item.name}</div>
                <img className="poke-photo" onLoad={() => handleSetImgLoaded()} src={item ? item.artwork : ''} alt="" />
              </div>
            ))
          ) : (
            <div className="render-info">Hit rerender button</div>
          )}
          {/* {ctx.pokemonList ? <div>{ctx.pokemonList[0].name}</div> : <div>DUPPSKO</div>} */}
          <div className="buttons">
            <button onClick={() => console.log('PREVOIUS')}>Previous</button>
            <button className="rerender-button" onClick={() => forceUpdate()}>
              RERENDER
            </button>
            <button onClick={() => console.log('NEXT')}>Next</button>
          </div>
        </StyledPokemonListContainer>
      ) : null}
    </>
  );
};

export default PokemonList;
