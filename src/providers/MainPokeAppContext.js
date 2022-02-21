import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginRegistrationContext } from 'providers/LoginRegistrationContext';
import useLocalStorage from '../funcStore/useLocalStorage';

export const MainPokeAppContext = React.createContext({
  resetPokedexOptions: () => {},
  handleGetPokemonList: () => {},
  handleGetRandomPokemon: () => {},
  handleFindPokemonView: () => {},
  handleIncrementOffset: () => {},
  handleDecrementOffset: () => {},
  handleSubmitCustomOffset: () => {},
  capitalizeFirstLetter: () => {},
  handleImageLoaded: () => {},
  handleSetUserLogged: () => {},
  handleSetUserLoggedOut: () => {},
  handleSetGlobalUserName: () => {},
  handleSubmitSearchId: () => {},

  currentPokedexOption: '',
  pokemon: {},
  pokemonList: [],
  foundedPokemon: {},
  loadingRequired: false,
  imageLoaded: false,
  offset: null,
  isUserLogged: false,
  globalUserName: '',
});

const MainPokeAppProvider = ({ children }) => {
  const API = 'https://pokeapi.co/api/v2/pokemon';

  const { handleClearResponseData } = useContext(LoginRegistrationContext);

  const [currentPokedexOption, setCurrentPokedexOption] = useState(null);
  const [pokemon, setPokemons] = useState(null);
  const [pokemonList, setPokemonList] = useState(null);
  const [foundedPokemon, setFoundedPokemon] = useState(null);
  const [loadingRequired, setLoadingRequired] = useState(false);
  const [offset, setOffset] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isUserLogged, setIsUserLogged] = useLocalStorage('isUserLogged', false);
  const [globalUserName, setGlobalUserName] = useLocalStorage('globalUserName', false);

  const history = useHistory();

  // Utils function code section below

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const resetPokedexOptions = () => {
    setCurrentPokedexOption(null);
  };

  // Pokemon List code section below

  useEffect(() => {
    if (currentPokedexOption != null) {
      handleGetPokemonList();
    }
  }, [offset]); // eslint-disable-line react-hooks/exhaustive-deps

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

  // Random Pokemon code section below

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

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  // Find Pokemon code section below

  const handleFindPokemonView = () => {
    setCurrentPokedexOption('findPokemon');
  };

  const handleSubmitSearchId = (userCustomValue) => {
    const findPokemon = async () => {
      setLoadingRequired(true);
      let res = await fetch(`${API}/${userCustomValue}`);
      let response = await res.json();
      let typesArray = [];

      response.types.forEach((item) => {
        typesArray.push(item.type.name);
      });

      let foundedPokemon = {
        id: response.id,
        name: response.name,
        artwork: response.sprites.other['official-artwork'].front_default,
        stats: response.stats,
        types: typesArray,
      };
      console.log('Founded pokemon', foundedPokemon);
      setFoundedPokemon(foundedPokemon);
    };
    findPokemon();
  };

  // Login/registration code section below

  const handleSetUserLogged = () => {
    setIsUserLogged(true);
  };

  const handleSetUserLoggedOut = () => {
    setIsUserLogged(false);
    handleClearResponseData();
    history.push('/home');
  };

  const handleSetGlobalUserName = (userName) => {
    setGlobalUserName(userName);
  };

  return (
    <MainPokeAppContext.Provider
      value={{
        resetPokedexOptions,
        handleGetPokemonList,
        handleGetRandomPokemon,
        handleFindPokemonView,
        handleIncrementOffset,
        handleDecrementOffset,
        handleSubmitCustomOffset,
        capitalizeFirstLetter,
        handleImageLoaded,
        handleSetUserLogged,
        handleSetUserLoggedOut,
        handleSetGlobalUserName,
        handleSubmitSearchId,
        currentPokedexOption,
        pokemon,
        pokemonList,
        foundedPokemon,
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
