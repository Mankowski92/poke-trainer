import React, { useContext } from 'react';
import { StyledPokemonListContainer } from './PokemonList.styles';
import { PokemonsContext } from '../../../providers/PokemonsProvider';

const PokemonList = () => {
  const ctx = useContext(PokemonsContext);

  const { handleSetImgLoaded } = useContext(PokemonsContext);
  const { handleIncrementOffset } = useContext(PokemonsContext);
  const { handleDecrementOffset } = useContext(PokemonsContext);
  const { handleSubmitCustomOffset } = useContext(PokemonsContext);

  return (
    <>
      {ctx.currentPokedexOption === 'pokemonList' ? (
        <StyledPokemonListContainer>
          {ctx.pokemonList && ctx.pokemonList.length ? (
            ctx.pokemonList.map((item, i) => (
              <div className="each-pokemon-container" key={i}>
                <div className="poke-id">{item.id}</div>
                <div className="poke-name">{item.name}</div>
                <img
                  className="poke-photo"
                  onLoad={() => handleSetImgLoaded()}
                  src={item ? item.sprites.other['official-artwork'].front_default : ''}
                  alt="Pokemon img"
                />
              </div>
            ))
          ) : (
            <div className="loading">loading...</div>
          )}
          {ctx.pokemonList && ctx.pokemonList.length ? (
            <div className="buttons">
              <button onClick={() => handleDecrementOffset()}>Previous</button>
              <button onClick={() => handleIncrementOffset()}>Next</button>
              <form className="custom-offset-form">
                <span> Offset (editable): </span>
                <input type="number" value={ctx.offset} onChange={handleSubmitCustomOffset} />
              </form>
            </div>
          ) : null}
        </StyledPokemonListContainer>
      ) : null}
    </>
  );
};

export default PokemonList;
