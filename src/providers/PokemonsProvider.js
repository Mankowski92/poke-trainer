import React, { useEffect, useState } from 'react';

export const PokemonsContext = React.createContext({
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

  currentPokedexOption: '',
  pokemon: {},
  pokemonList: [],
  loadingRequired: false,
  imageLoaded: false,
  offset: null,
  isUserLogged: false,
});

const PokemonsProvider = ({ children }) => {
  const API = 'https://pokeapi.co/api/v2/pokemon';

  const [currentPokedexOption, setCurrentPokedexOption] = useState(null);
  const [pokemon, setPokemons] = useState(null);
  const [pokemonList, setPokemonList] = useState(null);
  const [loadingRequired, setLoadingRequired] = useState(false);
  const [offset, setOffset] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(false);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    if (currentPokedexOption != null) {
      handleGetPokemonList();
    }
  }, [offset]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSetUserLogged = () => {
    setIsUserLogged(true);
    console.log('user logged = true!');
  };

  const handleImageLoaded = () => {
    setImageLoaded(true);
    console.log('image loaded!');
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

  const [responseData, setResponseData] = useState(null);

  const validateUser = (user) => {
    fetch('http://192.168.64.2/poke-trainer-backend/login-registration/authentication.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log('data: ', data);
          setResponseData(data);
        } else {
          alert('No data');
        }
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  };

  const registerUser = (newUser) => {
    fetch('http://192.168.64.2/poke-trainer-backend/login-registration/register-user.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log('data: ', data);
          setResponseData(data);
        } else {
          alert('No data');
        }
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  };

  return (
    <PokemonsContext.Provider
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
        currentPokedexOption,
        pokemon,
        pokemonList,
        loadingRequired,
        imageLoaded,
        offset,
        isUserLogged,
        validateUser,
        registerUser,
        responseData,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};
export default PokemonsProvider;
