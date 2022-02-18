import React, { useContext, useState } from 'react';
import { StyledFindPokemonContainer } from './FindPokemon.styles';
import { MainPokeAppContext } from '../../../providers/MainPokeAppContext';

const FindPokemon = () => {
  const ctx = useContext(MainPokeAppContext);

  const { handleSubmitSearchId } = useContext(MainPokeAppContext);
  const { capitalizeFirstLetter } = useContext(MainPokeAppContext);
  const { handleImageLoaded } = useContext(MainPokeAppContext);

  const [searchId, setSearchId] = useState('');
  const submitOffset = (event) => {
    handleSubmitSearchId(parseInt(searchId));
    event.preventDefault();
  };

  return (
    <>
      {ctx.currentPokedexOption === 'findPokemon' ? (
        <StyledFindPokemonContainer>
          <form className="find-pokemon-form" onSubmit={submitOffset}>
            <span> Pokemon id: </span>
            <input type="number" onChange={(e) => setSearchId(e.target.value)} />
            <input type="submit" value="Set" className="offset-submit" />
          </form>
          {ctx.foundedPokemon ? (
            <div className="founded-pokemon-container-wrapper">
              <div className="poke-id"> {'#' + ctx.foundedPokemon.id + ' '}</div>
              <div className="poke-name">{capitalizeFirstLetter(ctx.foundedPokemon.name)}</div>
              <img className="poke-photo" onLoad={() => handleImageLoaded()} src={ctx.foundedPokemon ? ctx.foundedPokemon.artwork : ''} alt="" />
              <div className="poke-types">
                {ctx.foundedPokemon.types.map((element, index) => {
                  return (
                    <div className={`poke-types__each-type ${element}`} key={index}>
                      {element}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </StyledFindPokemonContainer>
      ) : null}
    </>
  );
};

export default FindPokemon;
