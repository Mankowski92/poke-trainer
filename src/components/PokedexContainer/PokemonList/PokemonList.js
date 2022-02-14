import React, { useContext, useState } from 'react';
import { StyledPokemonListContainer } from './PokemonList.styles';
import { MainPokeAppContext } from '../../../providers/MainPokeAppContext';

const PokemonList = () => {
  const ctx = useContext(MainPokeAppContext);

  const { handleIncrementOffset } = useContext(MainPokeAppContext);
  const { handleDecrementOffset } = useContext(MainPokeAppContext);
  const { handleSubmitCustomOffset } = useContext(MainPokeAppContext);

  const [offset, setOffset] = useState('');
  const submitOffset = (event) => {
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
                <div className="up-down-buttons">
                  <button onClick={() => handleDecrementOffset()}>Previous</button>
                  <button onClick={() => handleIncrementOffset()}>Next</button>
                </div>
                <form className="custom-offset-form" onSubmit={submitOffset}>
                  <span> Offset (editable): </span>
                  <input type="number" onChange={(e) => setOffset(e.target.value)} />
                  <input type="submit" value="Set" className="offset-submit" />
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
