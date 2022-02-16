import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginRegistrationContext } from 'providers/LoginRegistrationContext';

export const MainPokeAppContext = React.createContext({
  handleGetPokemonList: () => {},
  handleFindPokemon: () => {},
  handleGetRandomPokemon: () => {},
  capitalizeFirstLetter: () => {},
  resetPokedexOptions: () => {},
  handleIncrementOffset: () => {},
  handleDecrementOffset: () => {},
  handleSubmitCustomOffset: () => {},
  handleImageLoaded: () => {},
  handleSetUserLogged: () => {},
  handleSetUserLoggedOut: () => {},
  handleSetGlobalUserName: () => {},

  currentPokedexOption: '',
  pokemon: {},
  pokemonList: [],
  loadingRequired: false,
  imageLoaded: false,
  offset: null,
  isUserLogged: false,
  globalUserName: '',
});

const MainPokeAppProvider = ({ children }) => {
  const API = 'https://pokeapi.co/api/v2/pokemon';

  const ctxLogin = useContext(LoginRegistrationContext);

  const { handleClearResponseData } = useContext(LoginRegistrationContext);

  const [currentPokedexOption, setCurrentPokedexOption] = useState(null);
  const [pokemon, setPokemons] = useState(null);
  const [pokemonList, setPokemonList] = useState(null);
  const [loadingRequired, setLoadingRequired] = useState(false);
  const [offset, setOffset] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [globalUserName, setGlobalUserName] = useState(false);

  const history = useHistory();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    if (currentPokedexOption != null) {
      handleGetPokemonList();
    }
  }, [offset]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isUserLogged === false) {
      console.log('!!! USER LOGGED = FALSE !!!');
      console.log('Response data at this moment: ', ctxLogin.responseData);
    }
  }, [isUserLogged]); //

  const handleSetUserLogged = () => {
    setIsUserLogged(true);
  };

  const handleSetUserLoggedOut = () => {
    setIsUserLogged(false);
    handleClearResponseData();
    console.log('RESPONE DATA RESET');
    history.push('/home');
  };

  const handleSetGlobalUserName = (userName) => {
    setGlobalUserName(userName);
  };

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  const handleIncrementOffset = () => {
    if (offset >= 1111) {
      alert('This is the very end of the pokemons list');
      return;
    }
    setOffset(offset + 6);
  };

  const handleDecrementOffset = () => {
    if (offset === 0) {
      alert('This is the very beginning of the pokemons list');
      return;
    }
    setOffset(offset - 6);
  };

  const handleSubmitCustomOffset = (userCustomValue) => {
    setOffset(userCustomValue - 1);
  };

  // handle responsible for PokemonList
  const handleGetPokemonList = () => {
    setCurrentPokedexOption('pokemonList');
    const fetchPokemons = async () => {
      setLoadingRequired(true);
      setPokemonList(null);
      let res = await fetch(`${API}?offset=${offset}&limit=6/`);
      let response = await res.json();

      const resolvePokemons = await Promise.all(
        response.results.map(async (singlePokemon) => {
          const res = await fetch(singlePokemon.url);
          return res.json();
        })
      );
      setPokemonList(resolvePokemons);
    };
    fetchPokemons();
  };

  // handle responsible for getting  random pokemon in pokedex
  const handleGetRandomPokemon = () => {
    setImageLoaded(false);

    setCurrentPokedexOption('randomPokemon');

    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    let randomPokemon = getRandomArbitrary(1, 898);

    const fetchData = async () => {
      setLoadingRequired(true);
      setPokemons(null);
      let res = await fetch(`${API}/${randomPokemon}/`);
      let response = await res.json();

      let typesArray = [];

      response.types.forEach((item) => {
        typesArray.push(item.type.name);
      });

      console.log('pokemon object from api for random pokemon', response);
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

  const handleFindPokemon = () => {
    setCurrentPokedexOption('findPokemon');
    console.log('POKEMON FORM');
  };

  const resetPokedexOptions = () => {
    setCurrentPokedexOption(null);
  };

  return (
    <MainPokeAppContext.Provider
      value={{
        handleGetRandomPokemon,
        handleFindPokemon,
        handleGetPokemonList,
        capitalizeFirstLetter,
        resetPokedexOptions,
        handleIncrementOffset,
        handleDecrementOffset,
        handleSubmitCustomOffset,
        handleImageLoaded,
        handleSetUserLogged,
        handleSetUserLoggedOut,
        handleSetGlobalUserName,
        currentPokedexOption,
        pokemon,
        pokemonList,
        loadingRequired,
        imageLoaded,
        offset,
        isUserLogged,
        globalUserName,
      }}
    >
      {children}
    </MainPokeAppContext.Provider>
  );
};
export default MainPokeAppProvider;
