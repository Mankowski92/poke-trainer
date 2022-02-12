import React, { useContext, useState } from 'react';
import { StyledPokemonListContainer } from './PokemonList.styles';
import { PokemonsContext } from '../../../providers/PokemonsProvider';

const PokemonList = () => {
  const ctx = useContext(PokemonsContext);

  const { handleIncrementOffset } = useContext(PokemonsContext);
  const { handleDecrementOffset } = useContext(PokemonsContext);
  const { handleSubmitCustomOffset } = useContext(PokemonsContext);

  const [offset, setOffset] = useState('');
  const submitOffset = (event) => {
    console.log('offset: ', offset);
    handleSubmitCustomOffset(parseInt(offset));
    event.preventDefault();
  };

  return (
    <>
      {ctx.currentPokedexOption === 'pokemonList' ? (
        <StyledPokemonListContainer>
          {ctx.pokemonList && ctx.pokemonList.length ? (
            <>
              {ctx.pokemonList.map((item, i) => (
                <div className="each-pokemon-container" key={i}>
                  <div className="poke-id">{item.id}</div>
                  <div className="poke-name">{item.name}</div>
                  <img className="poke-photo" src={item ? item.sprites.other['official-artwork'].front_default : ''} alt="Pokemon img" />
                </div>
              ))}
              <div className="buttons">
                <button onClick={() => handleDecrementOffset()}>Previous</button>
                <button onClick={() => handleIncrementOffset()}>Next</button>
                <form className="custom-offset-form" onSubmit={submitOffset}>
                  <span> Offset (editable): </span>
                  <input type="number" onChange={(e) => setOffset(e.target.value)} />
                  <input type="submit" />
                </form>
              </div>
            </>
          ) : (
            <div className="loading">loading...</div>
          )}
        </StyledPokemonListContainer>
      ) : null}
    </>
  );
};

export default PokemonList;
